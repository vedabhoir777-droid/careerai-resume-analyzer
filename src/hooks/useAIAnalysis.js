import { useState } from "react";
import { supabase } from "../lib/supabase";
import { extractTextFromPDF } from "../lib/pdfExtractor";
import { analyzeResume } from "../lib/analyzerResume";

function useAIAnalysis(user) {

  const [analysis, setAnalysis] = useState("");
const [analysisHistory, setAnalysisHistory] = useState([]);
  const [loading, setLoading] = useState(false);


  async function analyzeResumeFile(resume) {

    try {

      setLoading(true);


      const { data, error } = await supabase.storage
        .from("resumes")
        .download(resume.file_path);


      if (error) {
        alert(error.message);
        return;
      }


      const text = await extractTextFromPDF(data);

      const result = await analyzeResume(text);

console.log("AI OUTPUT:", result);

setAnalysis(result);
      console.log("AI RESULT BEFORE INSERT:", result);

      // save AI result
     // Check if this resume already has an analysis

const { data: existingReport } = await supabase
  .from("resume_analysis")
  .select("id")
  .eq("resume_id", resume.id)
  .eq("user_id", user.id)
  .maybeSingle();

if (existingReport) {

  // Update existing report

  const { error: updateError } = await supabase
    .from("resume_analysis")
    .update({
      analysis_result: result
    })
    .eq("id", existingReport.id);

  if (updateError) {
    console.log(updateError);
  }

} else {

  // Insert new report

  const { error: insertError } = await supabase
    .from("resume_analysis")
    .insert({
      user_id: user.id,
      resume_id: resume.id,
      analysis_result: result
    });

  if (insertError) {
    console.log(insertError);
  }

}
 {/* console.log("USER ID:", user.id)
  console.log("RESUME ID:",resume.id)
console.log("INSERT DATA:", insertData);
console.log("INSERT ERROR MESSAGE:", insertError?.message);*/}

      setLoading(false);


    } catch(error) {

      console.log(error);
      alert(error.message);
      setLoading(false);

    }

  }
  async function getAnalysis() {

  const { data, error } = await supabase
  .from("resume_analysis")
  .select(`
    id,
    analysis_result,
    created_at,
    resumes (
      id,
      title
    )
  `)
  .eq("user_id", user.id)
  .order("created_at", { ascending: false });
  if (!error && data) {

    setAnalysisHistory(data);

    if (data.length > 0) {
      setAnalysis(data[0].analysis_result);
    }

  }

}
async function sendReport() {

  if (!analysis) {
    alert("No analysis available.");
    return;
  }

  try {

    const response = await fetch("http://localhost:5000/send-email", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        email:user.email,
        analysis: analysis,

      }),

    });

    const data = await response.json();

    if (data.success) {
      alert("✅ Report sent successfully!");
    } else {
      alert(data.error);
    }

  } catch (error) {

    alert(error.message);

  }

}

 return {
  analysis,
  analysisHistory,
  loading,
  analyzeResumeFile,
  getAnalysis,
  sendReport
};

}


export default useAIAnalysis;
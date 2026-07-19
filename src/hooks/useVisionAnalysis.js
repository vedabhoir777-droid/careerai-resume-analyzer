{/*
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { analyzeResumeImage } from "../lib/groqVision";

function useVisionAnalysis(user){ 

  const [imageFile, setImageFile] = useState(null);
  const [visionAnalysis, setVisionAnalysis] = useState("");
  const [visionHistory, setVisionHistory] = useState([]);
  const [selectedVisionReport, setSelectedVisionReport] = useState("");

  async function analyzeImageResume(){

    if(!imageFile){
      alert("Please select resume image");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async()=>{

      try{
        console.log("Calling analyzeResumeImage...");

const result = await analyzeResumeImage(reader.result);

console.log("Result:", result);

        setVisionAnalysis(result);

        await supabase
  .from("vision_analysis")
  .insert({
    user_id: user.id,
    image_url: imageFile.name,   // or store the uploaded URL if you later upload to Storage
    analysis_result: result,
  });

      }
      catch(error){

        console.log(error);
        alert(error.message);

      }
    };
    reader.readAsDataURL(imageFile);
  }

  {/*async function getVisionHistory() {

  const { data, error } = await supabase
    .from("vision_analysis")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (!error && data) {

    setVisionHistory(data);

    if (data.length > 0) {
      setSelectedVisionReport(data[0].analysis_result);
    }

  }

}*/} {/*
async function getVisionHistory() {

  const { data, error } = await supabase
    .from("vision_analysis")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (!error && data) {

    setVisionHistory(data);

    if (data.length > 0) {
      setVisionAnalysis(data[0].analysis_result);
    }

  }

}

return {
  imageFile,
  setImageFile,
  visionAnalysis,
  visionHistory,
  analyzeImageResume,
  getVisionHistory
};
}


export default useVisionAnalysis;
*/}


import { useState } from "react";
import { supabase } from "../lib/supabase";
import { analyzeResumeImage } from "../lib/groqVision";

function useVisionAnalysis(user) {

  const [imageFile, setImageFile] = useState(null);
  const [visionAnalysis, setVisionAnalysis] = useState("");
  const [visionHistory, setVisionHistory] = useState([]);
  const [selectedVisionReport, setSelectedVisionReport] = useState("");
  // Analyze Resume Image
  async function analyzeImageResume() {

    if (!imageFile) {
      alert("Please select a resume image.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = async () => {

      try {

        const result = await analyzeResumeImage(reader.result);

        setVisionAnalysis(result);

        await supabase
  .from("vision_analysis")
  .insert({
    user_id: user.id,
    image_url: imageFile?.name || "Resume Image",
    analysis_result: result,
  });

        // Refresh history immediately
        getVisionHistory();

      } catch (error) {

        console.log(error);
        alert(error.message);

      }

    };

    reader.readAsDataURL(imageFile);

  }

  // Get Previous Reports
  async function getVisionHistory() {

    const { data, error } = await supabase
      .from("vision_analysis")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setVisionHistory(data || []);

    // Show latest report automatically
    if (data && data.length > 0) {
  setVisionAnalysis(data[0].analysis_result);

  // Keep the selected report valid
  if (!selectedVisionReport) {
    setSelectedVisionReport(data[0].analysis_result);
  }
}

  }
  return {
  imageFile,
  setImageFile,
  visionAnalysis,
  visionHistory,
  selectedVisionReport,
  setSelectedVisionReport,
  analyzeImageResume,
  getVisionHistory,
};


}

export default useVisionAnalysis;
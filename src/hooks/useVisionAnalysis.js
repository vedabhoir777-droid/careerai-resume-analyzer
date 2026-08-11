import { useState } from "react";
import { supabase } from "../lib/supabase";
import { analyzeResumeImage } from "../lib/groqVision";

function useVisionAnalysis(user) {

  const [imageFile, setImageFile] = useState(null);
  const [visionAnalysis, setVisionAnalysis] = useState("");
  const [visionHistory, setVisionHistory] = useState([]);
  const [selectedVisionReport, setSelectedVisionReport] = useState("");
  const [loading, setLoading] = useState(false);

  // Analyze Resume Image
  async function analyzeImageResume() {

    if (!imageFile) {
      alert("Please select a resume image.");
      return;
    }
    setLoading(true);

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
        setLoading(false);

      } catch (error) {

        console.log(error);
        setLoading(false);
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
    loading,
    visionAnalysis,
    visionHistory,
    selectedVisionReport,
    setSelectedVisionReport,
    analyzeImageResume,
    getVisionHistory,
  };


}

export default useVisionAnalysis;
import { useState } from "react";
import { supabase } from "../lib/supabase";


function useResumes(user) {

  const [resumes, setResumes] = useState([]);

  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [file, setFile] = useState(null);

  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);


  async function getResumes() {

    if (!user) return;

    const { data, error } = await supabase
      .from("resumes")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });


    if (!error) {
      setResumes(data || []);
    }

  }



  async function uploadResume() {

    if (!title || !skills || !file) {
      alert("⚠ Please fill all fields and choose a PDF file.");
      return;
    }
    setLoading(true);

    const filePath = `${user.id}/${Date.now()}-${file.name}`;


    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(filePath, file);


    if (uploadError) {
      setLoading(false);
      alert(uploadError.message);
      return;
    }



    const { error } = await supabase
      .from("resumes")
      .insert({

        title,
        skills,
        file_path: filePath,
        user_id: user.id

      });



    if (error) {
      setLoading(false);
      alert(error.message);
      return;
    }


    alert("✅ Resume uploaded successfully.");

    setTitle("");
    setSkills("");
    setFile(null);


    getResumes();
    setLoading(false);

  }




  async function deleteResume(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) {
      return;
    }

    const { error } = await supabase
      .from("resumes")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Resume deleted successfully.");

    getResumes();

  }




  function editResume(resume) {

    setTitle(resume.title);
    setSkills(resume.skills);
    setEditId(resume.id);

  }




  async function updateResume() {

    const { error } = await supabase
      .from("resumes")
      .update({

        title,
        skills

      })
      .eq("id", editId);



    if (error) {

      alert(error.message);
      return;

    }


    alert("✅ Resume updated successfully.");


    setEditId(null);
    setTitle("");
    setSkills("");

    getResumes();

  }




  async function viewResume(filePath) {

    const { data, error } = await supabase.storage
      .from("resumes")
      .createSignedUrl(filePath, 3600);



    if (error) {

      alert(error.message);
      return;

    }


    window.open(data.signedUrl, "_blank");

  }




  return {

    resumes,

    loading,

    title,
    setTitle,

    skills,
    setSkills,

    file,
    setFile,

    editId,

    getResumes,
    uploadResume,
    deleteResume,
    editResume,
    updateResume,
    viewResume

  };


}


export default useResumes;
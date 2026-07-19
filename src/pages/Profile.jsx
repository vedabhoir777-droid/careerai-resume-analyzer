import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import useResumes from "../hooks/useResumes";
import useAIAnalysis from "../hooks/useAIAnalysis";
import useVisionAnalysis from "../hooks/useVisionAnalysis";
import "../components/styles/Profile.css"

function Profile() {

  const { user } = useAuth();

  const { resumes, getResumes } = useResumes(user);

  const {
    analysisHistory,
    getAnalysis,
  } = useAIAnalysis(user);

  const {
    visionHistory,
    getVisionHistory,
  } = useVisionAnalysis(user);

  const username = user?.email
    ? user.email.split("@")[0]
    : "User";

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {

    if (user) {
      getResumes();
      getAnalysis();
      getVisionHistory();
      loadProfile();
    }

  }, [user]);

  async function loadProfile() {

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (data) {
      setFullName(data.full_name || "");
      setPhone(data.phone || "");
      setCollege(data.college || "");
      setCourse(data.course || "");
    }

  }

  async function saveProfile() {

    const { error } = await supabase
      .from("profiles")
      .upsert({
        user_id: user.id,
        full_name: fullName,
        phone: phone,
        college: college,
        course: course,
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Profile Updated Successfully");

  }

  return (

    <div className="profile-page">

      <h1>👤 My Profile</h1>

      <p className="profile-subtitle">
        Manage your CareerAI account information
      </p>

      <div className="profile-top-card">

        <div className="profile-avatar">
          {username.charAt(0).toUpperCase()}
        </div>

        <div className="profile-info">

          <h2>{username}</h2>

          <p>{user?.email}</p>

          <div className="profile-badges">

            <span className="badge active">
              Active
            </span>

            <span className="badge premium">
              CareerAI User
            </span>

          </div>

        </div>

      </div>

      <div className="profile-stats">

        <div className="profile-stat-card">

          <h4>Total Resumes</h4>

          <h2>{resumes?.length || 0}</h2>

        </div>

        <div className="profile-stat-card">

          <h4>AI Reports</h4>

          <h2>{analysisHistory?.length || 0}</h2>

        </div>

        <div className="profile-stat-card">

          <h4>Vision Reports</h4>

          <h2>{visionHistory?.length || 0}</h2>

        </div>

        

      </div>

      <div className="profile-card">

        <h2>Personal Information</h2>

        <label>Full Name</label>

        <input
        type="text"
        placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>

        <label>Email Address</label>

        <input type="email" placeholder="Enter your email" value={user?.email || ""} disabled/>

        <label>Phone Number</label>

        <input 
        type="text"
        placeholder="+91 9876543210"
        value={phone} 
        onChange={(e) => setPhone(e.target.value)}/>

        <label>College</label>

        <input
        type="text"
        placeholder="Enter your college name"
        value={college}
        onChange={(e) => setCollege(e.target.value)}/>

        <label>Course</label>

       <input
       type="text"
       placeholder="Enter your course"
       value={course}
       onChange={(e) => setCourse(e.target.value)}/>

        <button
          className="save-btn"
          onClick={saveProfile}
        >
          💾 Save Changes
        </button>

      </div>

    </div>

  );
}

export default Profile;
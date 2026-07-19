import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Resume from "./pages/Resume";
import Analytics from "./pages/Analytics";
import AIAnalysis from "./pages/AIAnalysis";
import VisionAnalysis from "./pages/VisionAnalysis";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Layout>
        <Dashboard />
      </Layout>
    </ProtectedRoute>
  }
/>

<Route
  path="/resume"
  element={
     <ProtectedRoute>
      <Layout>
        <Resume />
      </Layout>
    </ProtectedRoute>
  }
/>

<Route
  path="/analytics"
  element={
     <ProtectedRoute>
      <Layout>
        <Analytics />
      </Layout>
    </ProtectedRoute>
  }
/>

<Route
  path="/ai-analysis"
  element={
     <ProtectedRoute>
      <Layout>
        <AIAnalysis/>
      </Layout>
    </ProtectedRoute>
  }
/>

<Route
  path="/vision-analysis"
  element={
   <ProtectedRoute>
      <Layout>
        <VisionAnalysis />
      </Layout>
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Layout>
        <Profile />
      </Layout>
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
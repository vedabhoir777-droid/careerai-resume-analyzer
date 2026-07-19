# 🚀 CareerAI – Smart Resume Analyzer

> **Major Project developed as part of the Industrial Training Program guided by Prathamesh Sir.**

CareerAI is an AI-powered Resume Analyzer that helps users upload resumes, receive ATS scores, AI-based feedback, and Vision-based resume evaluation. It also provides analytics and secure resume management through a modern web interface.

---

# 🌐 Live Demo

**Vercel Deployment:**  
https://YOUR-VERCEL-LINK.vercel.app

---

# 📌 Project Overview

CareerAI is a full-stack web application that allows users to:

- Securely sign up and log in
- Upload and manage resumes
- Analyze resumes using Groq AI
- Analyze resume images using Groq Vision
- Receive ATS scores
- View AI-generated improvement suggestions
- Access resume analytics
- Email reports using Resend
- Manage everything through a clean dashboard

---

# ✨ Features

- 🔐 Supabase Authentication
- 🛡 Protected Routes
- 📄 Resume Upload & Management (CRUD)
- 🤖 AI Resume Analysis
- 👁 Groq Vision Resume Analysis
- 📊 Analytics Dashboard (Recharts)
- 📧 Email Report using Resend
- 👤 User Profile
- 🎨 Responsive Modern UI
- ☁ Deployed on Vercel

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React.js, Vite |
| Styling | CSS3 |
| Backend | Supabase |
| Authentication | Supabase Auth |
| Database | Supabase PostgreSQL |
| AI | Groq AI |
| Vision AI | Groq Vision |
| Email Service | Resend API |
| Charts | Recharts |
| Deployment | Vercel |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```text
careerai-resume-analyzer/
│
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── landing/
│   ├── lib/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

# 📸 Screenshots

## 🏠 Landing Page

![image alt](https://github.com/vedabhoir777-droid/careerai-resume-analyzer/blob/4f74ad14d5723092ea8faa1215345b3f4fd29907/Landing.png)
---
## 🔐 Login Page

![image alt](https://github.com/vedabhoir777-droid/careerai-resume-analyzer/blob/dc9c1264b1dab7433dd5b9180bfd58a14cb4b36f/Login.png)
---
## 📝 Signup Page

![image alt](https://github.com/vedabhoir777-droid/careerai-resume-analyzer/blob/723985507fbf134f324c7ea0a4b691d7c3aa5d6b/Signup.png)

---

## 📊 Dashboard

![iamge alt](https://github.com/vedabhoir777-droid/careerai-resume-analyzer/blob/4af96ad10c522b5f6a2b603d91ebcd6f4c5c2dcc/Dashboard.png)
---

## 📄 Resume Manager

![image alt](https://github.com/vedabhoir777-droid/careerai-resume-analyzer/blob/c91bfd0ab0d7884f04fb29ece491bffc4d9f55a1/Resume_manager.png)
---

## 🤖 AI Resume Analysis

![image alt](https://github.com/vedabhoir777-droid/careerai-resume
analyzer/blob/4e19eec00d3130e265972293092dc6128867e07d/AI_analysis.png)
---

## 👁 Groq Vision Analysis

![iamge alt](https://github.com/vedabhoir777-droid/careerai-resume-analyzer/blob/bdae1b56c13157eb507cc29b4a0d348c827b8cf9/Groq_vision.png)
---

## 📈 Analytics Dashboard

![image alt](https://github.com/vedabhoir777-droid/careerai-resume-analyzer/blob/982d636fedc0f4a8fb487925da5e0272ca0fc9ba/Analytics.png)

---

## 👤 Profile Page

![image alt](https://github.com/vedabhoir777-droid/careerai-resume-analyzer/blob/fb5ba0c8d595c5c23255afb1a4a1cc0de73ead84/Profile.png)
---

# 🔄 Application Workflow

```text
User
   │
   ▼
Login / Signup
   │
   ▼
Dashboard
   │
   ├───────────────┐
   ▼               ▼
Resume Manager   Profile
   │
   ▼
Upload Resume
   │
   ├───────────────┐
   ▼               ▼
AI Analysis     Vision Analysis
   │               │
   └──────┬────────┘
          ▼
ATS Score & Suggestions
          │
          ▼
Analytics Dashboard
          │
          ▼
Email Report (Resend)
```

---

# 📊 Major Project Requirements Covered

| Requirement | Status |
|-------------|--------|
| Supabase Authentication | ✅ |
| Protected Routes | ✅ |
| CRUD Operations | ✅ |
| Analytics Dashboard | ✅ |
| Landing Page UI/UX | ✅ |
| Groq AI Integration | ✅ |
| Groq Vision Integration | ✅ |
| Resend Email Integration | ✅ |
| GitHub Repository | ✅ |
| Vercel Deployment | ✅ |

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/careerai-resume-analyzer.git
```

Go to the project folder

```bash
cd careerai-resume-analyzer
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file and add:

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
GROQ_API_KEY=YOUR_GROQ_API_KEY
RESEND_API_KEY=YOUR_RESEND_API_KEY
```

---

# 👩‍💻 Developer

**Vedanti Bhoir**

Diploma in Artificial Intelligence & Machine Learning

---

# 🙏 Acknowledgement

This Major Project was developed as part of the Industrial Training Program under the guidance of **Prathamesh Sir**.

Special thanks to the open-source community and the teams behind **React**, **Supabase**, **Groq AI**, **Resend**, **Recharts**, **Vercel**, and **GitHub** for providing the tools and services that made this project possible.

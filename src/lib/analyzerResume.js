import { groq } from "./groq";

export async function analyzeResume(resumeText) {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      /*messages: [
        {
          role: "system",
          content:
            "You are an expert resume analyzer. Analyze the resume and provide resume score, strengths, weaknesses, missing skills, recommended roles, and improvement suggestions.",
        },
        {
          role: "user",
          content: resumeText,
        },
      ],*/
      messages: [
  {
  role: "system",
  content: `
You are an ATS Resume Analyzer.

You MUST follow the user's requested output format EXACTLY.

Do NOT change headings.
Do NOT add extra text.
Do NOT explain the format.
Do NOT write paragraphs under ATS Score.

If the requested format is not followed, your answer is incorrect.
`,
},

 {
  role: "user",
 content: `
You are a Senior HR Recruiter and ATS Expert.

Analyze the resume and STRICTLY follow the format below.

Do not add any extra headings.
Do not explain your formatting.
Do not write paragraphs where bullet points are requested.

CAREERAI RESUME EVALUATION REPORT

ATS Score: XX%

Candidate Overview
Write ONE short paragraph (maximum 4 lines).

Technical Skills
Return ONLY a comma-separated list.
Example:
React, JavaScript, HTML, CSS, Supabase, Tailwind CSS

Key Strengths

- Mention only strengths, skills, technologies, and achievements that are clearly present in the uploaded resume.
- Do not add skills that are not mentioned in the resume.

Areas for Improvement

- Mention genuine improvements based on missing information or weaknesses found in the resume.
- Do not repeat skills that are already present in the resume.

Missing Skills

- Suggest only relevant skills that are NOT present in the uploaded resume.
- Do not include any skill that is already mentioned in the resume.
- Choose skills based on the candidate's profile and target career path.

Recommended Job Roles
- React Developer
- Front-end Developer
- UI Developer

Career Recommendations
- Build more production projects
- Learn backend development
- Improve GitHub portfolio
- Earn relevant certifications

Final Verdict
Write ONE professional paragraph (maximum 4 lines).

Rules:

- Replace XX with the actual ATS score.
- ATS Score must be between 0 and 100.
- Never use a fixed score.
- Write exactly: ATS Score: XX%
- Never write "scores 80 out of 100".
- Never use Markdown (** or ## or ###).
- Technical Skills MUST contain ONLY comma-separated skills.
- Every section after Technical Skills MUST use "-" bullet points.
- Each bullet point MUST appear on a separate line.
- Never combine multiple bullet points into a single line.
- Maintain proper line breaks between all bullet points.
- Do not write long paragraphs except Candidate Overview and Final Verdict.

Resume:
${resumeText}
`},
],
    });

    //return response.choices[0].message.content;
    let report = response.choices[0].message.content;

// Remove Markdown formatting
report = report
  .replace(/\*\*/g, "")
  .replace(/##/g, "")
  .replace(/###/g, "")
  .replace(/\*/g, "");

return report;

  } catch (error) {
    console.error("Groq Error:", error);
    throw error;
  }
}
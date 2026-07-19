import Groq from "groq-sdk";
import Tesseract from "tesseract.js";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function analyzeResumeImage(imageBase64) {
  try {
    console.log("📄 Extracting text from image...");

    const {
      data: { text },
    } = await Tesseract.recognize(imageBase64, "eng");

    if (!text || text.trim().length < 20) {
      throw new Error("Could not read text from resume image.");
    }

    console.log("✅ OCR Completed");

    const prompt = `
You are a Senior HR Resume Reviewer and ATS Expert.

Analyze this resume text professionally.

Resume Text:

${text}

Return ONLY in this format.

CAREERAI VISION RESUME EVALUATION REPORT

ATS Score: XX%

Resume Layout Assessment
Write ONE short paragraph.

Section Organization
Write ONE short paragraph.

Technical Skills

Extract ONLY the technical skills that actually appear in the uploaded resume.

Return them as a comma-separated list.

Example:

Python, SQL, TensorFlow, Machine Learning, Git

If no technical skills are found, write:

None

Strengths

- First strength
- Second strength
- Third strength
- Fourth strength

Areas for Improvement

- First improvement
- Second improvement
- Third improvement
- Fourth improvement

Design Recommendations

- First recommendation
- Second recommendation
- Third recommendation
- Fourth recommendation

Overall Evaluation

Write ONE professional paragraph.

Rules:

• Calculate ATS Score yourself.
• ATS Score must be between 0 and 100.
• Never write ATS Compatibility.
• Never write Detected Technical Skills.
• Never write markdown.
• Never write **.
• Never write ---.
• Use "-" bullets only.
`;

    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
    });

    let report = response.choices[0].message.content;

    report = report
      .replace(/\*\*/g, "")
      .replace(/##/g, "")
      .replace(/###/g, "");

    return report;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
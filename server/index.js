import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

console.log("RESEND KEY FOUND:", !!process.env.RESEND_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {

  console.log("BODY:", req.body);

  const { email, analysis } = req.body;

  try {

    await resend.emails.send({

      from: "CareerAI <onboarding@resend.dev>",

      to: email,

      subject: "📄 Your CareerAI Resume Analysis Report",
      text: analysis,

    });

    res.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});

app.listen(5000, () => {

  console.log("Server running on port 5000");

});
// routes/resume.js
import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

function buildPrompt(data) {
  const { name, email, phone, linkedin, github, summary, skills, experience, education, projects } = data;

  const expText = experience
    .filter((e) => e.company || e.role)
    .map(
      (e) =>
        `Company: ${e.company}\nRole: ${e.role}\nDuration: ${e.duration}\nPoints:\n${e.points}`
    )
    .join("\n\n");

  const eduText = education
    .filter((e) => e.institution)
    .map(
      (e) =>
        `Institution: ${e.institution}\nDegree: ${e.degree}\nYear: ${e.year}${e.gpa ? `\nGPA: ${e.gpa}` : ""}`
    )
    .join("\n\n");

  const projText = projects
    .filter((p) => p.name)
    .map(
      (p) =>
        `Name: ${p.name}\nTech: ${p.tech}\nDescription:\n${p.points}`
    )
    .join("\n\n");

  return `You are an expert resume writer and LaTeX typesetter. Generate a clean, ATS-friendly, professional LaTeX resume using the data provided below.

STRICT RULES:
STRICT ATS RULES:

1. Produce a modern ATS-compliant software engineer resume.
2. Use a single-column layout only.
3. Do NOT use tables, columns, text boxes, graphics, icons, colors, images, headers, footers, or sidebars.
4. Place sections in this exact order:
   Summary
   Skills
   Experience
   Projects
   Education
5. Rewrite weak descriptions into strong professional bullet points.
6. Start every bullet point with a powerful action verb.
7. Quantify achievements whenever possible.
8. Emphasize technical skills and software engineering keywords.
9. Keep the resume concise and recruiter-friendly.
10. Ensure the resume fits on one page.
11. Optimize for Applicant Tracking Systems (ATS).
12. Return ONLY valid LaTeX beginning with \documentclass.
13. Never output explanations, markdown, or code fences.

CANDIDATE DATA:
Name: ${name}
Email: ${email}
Phone: ${phone}
LinkedIn: ${linkedin}
GitHub: ${github}

Summary:
${summary || "Not provided"}

Skills:
${skills}

Work Experience:
${expText || "None provided"}

Education:
${eduText || "None provided"}

Projects:
${projText || "None provided"}

Generate the complete LaTeX resume now:`;
}

router.post("/generate", async (req, res) => {
  try {
    const prompt = buildPrompt(req.body);

    const completion = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [
    {
      role: "system",
      content:
        "You are a senior resume writer specializing in ATS-optimized software engineering resumes. Create recruiter-ready resumes that maximize ATS score. Use strong action verbs, quantify achievements, and rewrite weak content professionally.",
    },
    {
      role: "user",
      content: prompt,
    },
  ],
  temperature: 0.3,
});

    let latex = completion.choices[0].message.content;

    // Strip markdown fences if Gemini wraps anyway
    latex = latex
      .replace(/^```latex\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim();

    res.json({ latex });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to generate resume. Please try again." });
    }
});

export default router;
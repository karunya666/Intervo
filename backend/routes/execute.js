import express from "express";
const router = express.Router();

const LANGUAGE_MAP = {
  javascript: { language: "nodejs", versionIndex: "4" },
  python: { language: "python3", versionIndex: "4" },
  java: { language: "java", versionIndex: "4" },
};

router.post("/execute", async (req, res) => {
  const { language, code } = req.body;

  const config = LANGUAGE_MAP[language];
  if (!config) return res.status(400).json({ error: "Unsupported language" });

  const response = await fetch("https://api.jdoodle.com/v1/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
      script: code,
      language: config.language,
      versionIndex: config.versionIndex,
    }),
  });

  const data = await response.json();
  res.json({ output: data.output });
});

export default router;
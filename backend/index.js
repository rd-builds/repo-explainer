require("dotenv").config();

const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🧠 Smart Explanation Generator (Pseudo-AI)
function generateExplanation(data, readme) {
  let tech = [];
  let type = "Software Project";
  let difficulty = "Beginner";

  // 🔍 Detect tech stack
  if (readme.includes("React")) tech.push("React");
  if (readme.includes("Next.js")) tech.push("Next.js");
  if (readme.includes("Node")) tech.push("Node.js");
  if (readme.includes("Express")) tech.push("Express");
  if (readme.includes("MongoDB")) tech.push("MongoDB");
  if (readme.includes("Firebase")) tech.push("Firebase");
  if (readme.includes("Python")) tech.push("Python");
  if (readme.includes("Django")) tech.push("Django");

  // 🔍 Detect project type
  const text = readme.toLowerCase();

  if (text.includes("api")) type = "Backend API";
  else if (text.includes("ui")) type = "Frontend App";
  else if (text.includes("fullstack")) type = "Full Stack App";

  // 🔍 Difficulty estimation
  if (readme.length > 3000) difficulty = "Intermediate";
  if (readme.length > 6000) difficulty = "Advanced";

  return `
🚀 PROJECT EXPLANATION

📌 Overview:
${data.description || "No description available"}

🧩 Project Type:
${type}

🛠 Tech Stack:
${tech.length ? tech.join(", ") : data.language || "Not specified"}

📊 Difficulty Level:
${difficulty}

⚙️ What it does:
This project is mainly built using ${data.language || "various technologies"} and aims to solve a specific problem.

▶️ How to run:
1. Clone the repository
2. Install dependencies (npm install / pip install)
3. Run the project (npm start / python main.py)

📖 README Insights:
${readme.substring(0, 500)}
`;
}

// 🔥 NEW FEATURE BLOCK
function analyzeProject(data, readme) {
  let beginnerLevel = "Intermediate";
  let useCase = "General Project";
  let warnings = [];

  const text = readme.toLowerCase();

  // 🎯 Beginner Score
  if (readme.length < 1500) beginnerLevel = "Beginner";
  if (readme.length > 4000) beginnerLevel = "Advanced";

  // 🎯 Use Case Detection
  if (text.includes("chat")) useCase = "Chat Application";
  else if (text.includes("ecommerce")) useCase = "E-commerce Platform";
  else if (text.includes("api")) useCase = "Backend API";
  else if (text.includes("portfolio")) useCase = "Portfolio Website";
  else if (text.includes("dashboard")) useCase = "Dashboard / Admin Panel";

  // ⚠️ Repo Quality Warnings
  if (!data.description) {
    warnings.push("⚠️ No project description provided");
  }

  if (readme.length < 100) {
    warnings.push("⚠️ README is too short");
  }

  if (!data.language) {
    warnings.push("⚠️ Tech stack not clearly defined");
  }

  return {
    beginnerLevel,
    useCase,
    warnings
  };
}

app.post("/explain", async (req, res) => {
  try {
    const { repoUrl } = req.body;

    // extract username and repo
    const parts = repoUrl.split("/");
    const username = parts[3];
    const repo = parts[4];

    // GitHub repo data
    const response = await axios.get(
      `https://api.github.com/repos/${username}/${repo}`
    );

    const data = response.data;

    // GitHub README
    const readmeResponse = await axios.get(
      `https://api.github.com/repos/${username}/${repo}/readme`
    );

    const readmeContent = Buffer.from(
      readmeResponse.data.content,
      "base64"
    ).toString("utf-8");

    // 🧠 Generate explanation
    const explanation = generateExplanation(data, readmeContent);

    // 🔥 NEW FEATURES
    const analysis = analyzeProject(data, readmeContent);

    res.json({
      summary: data.description || "No description available",
      techStack: [data.language],
      steps: ["Clone repo", "Install dependencies", "Run project"],
      explanation: explanation,

      // 🔥 Added features
      beginnerLevel: analysis.beginnerLevel,
      useCase: analysis.useCase,
      warnings: analysis.warnings
    });

  } catch (error) {
    console.error("ERROR:", error.response?.data || error.message);

    res.status(500).json({
      error: "Something went wrong"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
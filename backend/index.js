const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/explain", async (req, res) => {
  try {
    const { repoUrl } = req.body;

    // extract user and repo name
    const parts = repoUrl.split("/");
    const username = parts[3];
    const repo = parts[4];

    // call GitHub API
    const response = await axios.get(
      `https://api.github.com/repos/${username}/${repo}`
    );

    const data = response.data;

    res.json({
      summary: data.description || "No description available",
      techStack: [data.language],
      steps: ["Clone repo", "Install dependencies", "Run project"]
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
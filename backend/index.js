const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/explain", (req, res) => {
  const { repoUrl } = req.body;

  console.log("Repo received:", repoUrl);

  res.json({
    summary: "This project explains GitHub repositories",
    techStack: ["Node.js", "Express"],
    steps: ["Clone repo", "Install dependencies", "Run project"]
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
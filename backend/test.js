require("dotenv").config();
const axios = require("axios");

async function testGemini() {
  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: "Explain what React is in 2 lines"
              }
            ]
          }
        ]
      }
    );

    console.log(res.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

testGemini();

import Groq from "groq-sdk";
import { ENV } from "../libs/env.js";

const groq = new Groq({
  apiKey: ENV.GROQ_API_KEY,
});

export const aiReview = async (req, res) => {
  try {
    const { problem, code } = req.body;

    console.log("req to ai");
   
    const prompt =  `
You are a coding mentor.

Review this student's solution.

Problem:
${problem}

Code:
${code}

Return your response in exactly this format:

APPROACH:
Explain the approach briefly.

COMPLEXITY:
Time: ...
Space: ...

ISSUES:
Explain bugs or mistakes. If there are none, say "No major issues found."

IMPROVEMENTS:
Give 1-3 useful suggestions or hints.

Do not provide the complete solution.
`;

    console.log("Sending request to Groq...");

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content: "You are an expert coding mentor.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const review = completion.choices[0]?.message?.content || "";

    console.log("AI review received");

    return res.status(200).json({
      success: true,
      review,
    });

  } catch (error) {
    console.error("AI review Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate AI review",
      error: error.message,
    });
  }
};
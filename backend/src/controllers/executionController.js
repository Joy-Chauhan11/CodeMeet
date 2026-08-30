import axios from "axios";
import { ENV } from "../libs/env.js";

const SUPPORTED_LANGUAGES = ["javascript", "python", "cpp", "java"];
const JUDGE_SUPPORTED_LANGUAGES = ["javascript", "python"];

export const executeCode = async (req, res) => {
  try {
    const { language, code, stdin } = req.body;

    if (!SUPPORTED_LANGUAGES.includes(language)) {
      return res.status(400).json({
        success: false,
        message: `Unsupported language: ${language}`,
      });
    }

    const response = await axios.post(
      `${ENV.CODE_ENGINE_URL}/execute`,
      { language, code, stdin }
    );

    return res.status(200).json(response.data);

  } catch (err) {
    console.log("execution err:", err.message);
    console.log("Code Engine response:", err.response?.data);

    return res.status(500).json({
      success: false,
      message: "Failed to execute code",
      error: err.response?.data || err.message,
    });
  }
};

export const judgeCode = async (req, res) => {
  try {
    const { language, code, testCases, functionName } = req.body;

    if (!JUDGE_SUPPORTED_LANGUAGES.includes(language)) {
      return res.status(400).json({
        success: false,
        message: `${language} is not yet supported for submissions.`,
      });
    }

    const response = await axios.post(
      `${ENV.CODE_ENGINE_URL}/judge`,
      { language, code, functionName, testCases }
    );

    return res.status(200).json(response.data);

  } catch (err) {
    console.error("Judge Error:", err.message);
    console.error("Code Engine response:", err.response?.data);

    return res.status(500).json({
      success: false,
      message: "Failed to judge code",
      error: err.response?.data || err.message,
    });
  }
};

import axios from "axios"
import { ENV } from "../libs/env.js";
import { createJavaScriptWrapper } from "../utils/codeWrapper.js";
// export const executeCode = async (req, res) => {
//   try {
//     const {
//       language,
//       code,
//       testCases,
//       functionName,
//     } = req.body;

//     const response = await axios.post(
//       `${ENV.CODE_ENGINE_URL}/execute`,
//       {
//         language,
//         code,
//         testCases,
//         functionName,
//       }
//     );

//     return res.status(200).json(response.data);

//   } catch (err) {
//     console.log("execution err", err.message);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to execute code",
//       error: err.message,
//     });
//   }
// };



export const executeCode = async (req, res) => {
  try {
    const { language, code } = req.body;

    const response = await axios.post(
      `${ENV.CODE_ENGINE_URL}/execute`,
      {
        language,
        code,
      }
    );

    return res.status(200).json(response.data);

  } catch (err) {
    console.log("execution err:", err.message);

    console.log(
      "Code Engine response:",
      err.response?.data
    );

    return res.status(500).json({
      success: false,
      message: "Failed to execute code",
      error: err.response?.data || err.message,
    });
  }
};


export const judgeCode = async (req, res) => {
  try {
    const {
      language,
      code,
      testCases,
    } = req.body;

    let executableCode = code;
    let executableTestCases = testCases;

    if (language === "javascript") {

      executableCode = createJavaScriptWrapper(code);

      executableTestCases = testCases.map((testCase) => ({
        input: JSON.stringify(testCase.input),
        expectedOutput: JSON.stringify(
          testCase.expectedOutput
        ),
      }));
    }

    const response = await axios.post(
      `${ENV.CODE_ENGINE_URL}/judge`,
      {
        language,
        code: executableCode,
        testCases: executableTestCases,
      }
    );

    return res.status(200).json(response.data);

  } catch (err) {

    console.error("Judge Error:", err.message);

    console.error(
      "Code Engine response:",
      err.response?.data
    );

    return res.status(500).json({
      success: false,
      message: "Failed to judge code",
      error: err.response?.data || err.message,
    });
  }
};

// export const judgeCode = async (req, res) => {
//   try {
//     const response = await axios.post(
//       `${ENV.CODE_ENGINE_URL}/judge`,
//       req.body
//     );

//     return res.status(200).json(response.data);

//   } catch (err) {
//     console.error("judge Err:", err.message);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to judge code",
//       error: err.message,
//     });
//   }
// };

// export const executeCode = async (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Execute API is working",
//   });
// };

// export const judgeCode = async (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Judge API is working",
//   });
// };
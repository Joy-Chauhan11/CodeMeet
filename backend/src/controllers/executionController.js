import axios from "axios"
import { ENV } from "../libs/env.js";


export const executeCode = async (req,res)=>{
try{
const {language, code}=req.body;

const response = await axios.post(
  `${ENV.CODE_ENGINE_URL}/execute`,
   {
    language,
    code
   }
);

return res.status(200).json(response.data);
}catch(err){
  console.log("execution err",err.message);

  return res.status(500).json({
      success: false,
      message: "Failed to execute code",
      error: err.message,});

}


}



export const judgeCode = async (req, res) => {
  try {
    const response = await axios.post(
      `${CODE_ENGINE_URL}/judge`,
      req.body
    );

    return res.status(200).json(response.data);

  } catch (err) {
    console.error("judge Err:", err.message);

    return res.status(500).json({
      success: false,
      message: "Failed to judge code",
      error: err.message,
    });
  }
};

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
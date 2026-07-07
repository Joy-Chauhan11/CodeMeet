
import express from "express";
import {ENV} from "./libs/env.js"
import cors from "cors"
import { connect_db } from "./libs/db.js";
const app=express();
import path from "path"

const __dirname=path.resolve();



// if(ENV.NODE_ENV==="production"){
//     app.use(express.static(path.join(__dirname,"../frontend/dist")));

//     app.get("/{*any}",(req,res)=>{
//         res.sendFile(path.join(__dirname,"../frontend/dist","index.html"));
//     })
// }

app.listen(ENV.PORT,()=>{
console.log(`server is runnig at ${ENV.PORT}`);
connect_db();
})

app.use(
  cors({
    origin: [
      "http://localhost:5173",          // Local React app
      "https://code-meet-gold.vercel.app/"     // Deployed React app
    ],
    credentials: true
  })
);




app.get("/",(req,res)=>{
res.send("HEY, WELCOME TO THE CODEMEET!")
})

app.get("/api/testing",(req,res)=>{
    res.json({
        success:true,
        msg:"api is working"
    })
})
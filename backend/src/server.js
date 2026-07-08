
import express from "express";
import {ENV} from "./libs/env.js"
import cors from "cors"
import { connect_db } from "./libs/db.js";
const app=express();
import path from "path"
import serve from "inngest/express"
import { functions, inngest } from "./libs/inngest.js";
const __dirname=path.resolve();
app.use(express.json());
 

app.use(
  cors({
    origin: [
      ENV.clinent_url,          // Local React app
    ],
    credentials: true
  })
);
app.use("/api/inngest",serve({client:inngest, functions}));

 
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




app.get("/",(req,res)=>{
res.send("HEY, WELCOME TO THE CODEMEET!")
})

app.get("/api/testing",(req,res)=>{
    res.json({
        success:true,
        msg:"api is working"
    })
})
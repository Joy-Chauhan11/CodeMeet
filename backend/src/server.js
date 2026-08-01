
import express from "express";
import {ENV} from "./libs/env.js"
import cors from "cors"
import { connect_db } from "./libs/db.js";
import { clerkMiddleware } from '@clerk/express'
import sessionRoutes from "./routes/sessionRoutes.js"
const app=express();

import path from "path"
import executionRoutes from "./routes/executionRouter.js"
const __dirname=path.resolve();

app.use(express.json());
 
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(
  cors({
    origin: [
      ENV.client_url, 
               // Local React app
    ],
    credentials: true
  })
);


console.log("CLIENT URL:", ENV.client_url);
app.use(clerkMiddleware());

app.use("/api/sessions",sessionRoutes)
 app.use("/api", executionRoutes);
 
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
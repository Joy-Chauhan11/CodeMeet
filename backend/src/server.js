
import express from "express";
import http from "http"
import {ENV} from "./libs/env.js"
import cors from "cors"
import { connect_db } from "./libs/db.js";
import { clerkMiddleware } from '@clerk/express'
import { initializeSocket } from "./socket/socket.js";

import sessionRoutes from "./routes/sessionRoutes.js"
import aiRoutes from "./routes/aiRouter.js"
import path from "path"
import executionRoutes from "./routes/executionRouter.js"
const __dirname=path.resolve();



const app=express();
const server = http.createServer(app);
initializeSocket(server);


app.use(express.json());
 
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(
  cors({
    origin: [
      ENV.client_url, 
               
    ],
    credentials: true
  })
);


console.log("CLIENT URL:", ENV.client_url);
app.use(clerkMiddleware());

app.use("/api/sessions",sessionRoutes)
 app.use("/api", executionRoutes);
 app.use("/api/ai",aiRoutes)
 
// if(ENV.NODE_ENV==="production"){
//     app.use(express.static(path.join(__dirname,"../frontend/dist")));

//     app.get("/{*any}",(req,res)=>{
//         res.sendFile(path.join(__dirname,"../frontend/dist","index.html"));
//     })
// }

server.listen(ENV.PORT,()=>{ 
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

import express from "express";
import {ENV} from "./libs/env.js"
console.log(ENV.PORT)

const app=express();

app.listen(ENV.PORT,()=>{
console.log(`server is runnig at ${ENV.PORT}`);
})

app.get("/",(req,res)=>{
res.send("HEY, WELCOME TO THE CODEMEET!")
})
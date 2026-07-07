import mongoose from "mongoose"

import {ENV} from "./env.js"

export const connect_db =async()=>{
    try{
        if(!ENV.DB_URL){
throw new Error("DB_URL IS NOT DEFINED IN ENV VARIABLE")
        }
const conn = await mongoose.connect(ENV.DB_URL);
console.log("connected mongodb");
    }
    catch(error)
    {console.log(error);

    }
}

import mongoose from "mongoose"

import {ENV} from "./env.js"

export const connect_db =async()=>{
    try{
const conn = await mongoose.connect(ENV.DB_URL);
console.log("connected mongodb");
    }
    catch(error)
    {console.log(error);

    }
}

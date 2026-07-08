import {Inngest, inngest} from "inngest"
import { connect_db } from "./db"
import User  from "../models/User"

export const inngest = new Inngest({id:"CodeMeet "})
const syncUser = inngest.createFunction(
    {id:"sync-user"},
    {event:"cleark/user.created"},
     async({event})=>{
        await connect_db();
         const {id,email_adresses,first_name,last_name,image_url}=event.data;

         const newUser = {
            clearkId : id,
            email : email_adresses[0]?.email_adresses,
           name:`${first_name || ""} ${last_name || ""}`,
           profileImage : image_url 
         }
         await User.create(newUser)
     }
)

const deleteUserFromDb = inngest.createFunction(
    {id:"Delete-user"},
    {event:"cleark/user.deleted"},
     async({event})=>{
        await connect_db();
         const {id}=event.data;

         
         await User.deleteOne({clearkId:id})
     }
)


export const functions = [syncUser]
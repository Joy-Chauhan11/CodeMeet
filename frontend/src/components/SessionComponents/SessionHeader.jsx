import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {Copy} from "lucide-react"
import {toast} from "react-hot-toast"
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

export default function SessionHeader({ session }) {
  function handleCopy(){
   navigator.clipboard.writeText(session.roomId);
   toast.success("Copied Succesfully");

  }
  const navigate =useNavigate();
  const { getToken } = useAuth();

//   const handleEndSession = async () => {
//   try {
//     const token = await getToken();

//     await axios.post(
//       `http://localhost:8080/api/sessions/${session._id}/end`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     navigate("/dashboard");

//   } catch (error) {
//     console.error("Failed to end session:", error);
//   }
// };

const handleEndSession = async () => {

  try {
    const token = await getToken();

    console.log("Session ID:", session?._id);

    const response = await axios.post(
      `http://localhost:8080/api/sessions/${session._id}/end`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("End session response:", response.data);

    navigate("/dashboard");

  } catch (error) {
    console.error(
      "END SESSION ERROR:",
      error.message
    );
  }
};



  return (
    <div className="h-12 px-4 border-b border-base-300 bg-base-200 flex items-center justify-between">

  <div className="flex items-center gap-4">
    <h2 className="font-semibold text-lg">{session.problem}</h2>

    <span className="badge badge-success badge-sm">
      {session.difficulty}
    </span>

    <span className="text-sm text-base-content/70">
      Host: {session.host.name}
    </span>

    <span className="text-sm text-base-content/70">
      Guest: {session.participant?.name || "Waiting..."}
     
    </span>
    <span  >
       RoomId :
      
     
    </span>
<span
  onClick={()=>{
    handleCopy()
  }}

  className="bg-primary/10 border border-primary/20 text-primary rounded-lg px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-primary/20 transition"
>
  {session.roomId}
  <Copy size={16} />
</span>
    
  </div>

  <div className="flex items-center gap-3">
    <span className="text-sm font-medium">
      ⏱ 00:00
    </span>

    {/* <button className="btn btn-error btn-xs"
    onClick={handleEndSession}
    >
      Leave
    </button> */}
    <button
  className="btn btn-error btn-xs"
  onClick={() => {
    console.log("🔥 END SESSION CLICKED");
    handleEndSession();
  }}
>
  End Session
</button>
  </div>

</div>
  )
}
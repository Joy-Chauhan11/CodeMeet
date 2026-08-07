import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function SessionHeader({ session }) {
  const navigate =useNavigate();
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
  </div>

  <div className="flex items-center gap-3">
    <span className="text-sm font-medium">
      ⏱ 00:00
    </span>

    <button className="btn btn-error btn-xs"
    onClick={()=>{
      navigate("/dashboard")
    }}
    >
      Leave
    </button>
  </div>

</div>
  )
}
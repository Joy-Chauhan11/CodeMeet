import { useNavigate } from "react-router";
import {
  CalendarDays,
  Clock,
  Loader2,
  ArrowRight,
} from "lucide-react";
import axios from "axios";
import {useUser} from "@clerk/clerk-react"




export default function RecentSessions({
  
sessions}) {
  const navigate = useNavigate();


  // if (isLoading) {
  //   return (
  //     <div className="card bg-base-100 border border-base-300 shadow-md mt-6">
  //       <div className="card-body flex justify-center items-center py-16">
  //         <Loader2 className="w-8 h-8 animate-spin text-primary" />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="card bg-base-100 border border-base-300 shadow-md mt-6">
      <div className="card-body">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">
            📚 Recent Sessions
          </h2>

          <div className="badge badge-secondary">
            {sessions.length}
          </div>
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-12 text-base-content/60">
            You haven't joined any sessions yet.
          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="table table-zebra">

              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Difficulty</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {/* Rendering recent sessions */}
                {sessions.map((session) => (
                  <tr
                    key={session._id}
                    className="hover"
                  >
                    <td className="font-medium">
                      {session.problem}
                    </td>

                    <td>
                      <span className="badge badge-outline capitalize">
                        {session.difficulty}
                      </span>
                    </td>

                    <td>
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarDays size={15} />
                        {new Date(session.createdAt).toLocaleDateString()}
                      </div>
                    </td>

                    <td className="text-right">

                      <button
                        onClick={() =>
                          navigate(`/session/${session._id}`)
                        }
                        className="btn btn-sm btn-primary gap-2"
                      >
                        Open
                        <ArrowRight size={16} />
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>
    </div>
  );
}
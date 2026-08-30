import { useNavigate } from "react-router";
import {
  Users,
  PlayCircle,
  Loader2,
  UserCircle,
} from "lucide-react";

export default function ActiveSessions({
  sessions = [],
  isLoading,
  isUserInSession,
}) {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="card bg-base-100 border border-base-300 shadow-md">
        <div className="card-body flex items-center justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 border border-base-300 shadow-md">
      <div className="card-body">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">
            Active Sessions
          </h2>

          <div className="badge badge-primary">
            {sessions.length}
          </div>
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-12 text-base-content/60">
            No active sessions.
          </div>
        ) : (
          <div className="space-y-4">

            {sessions.map((session) => (
              <div
                key={session._id}
                className="border border-base-300 rounded-xl p-4 hover:border-primary transition-all"
              >

                <div className="flex justify-between items-start">

                  <div className="space-y-2">

                    <h3 className="font-bold text-lg">
                      {session.problem}
                    </h3>

                    <div className="badge badge-outline capitalize">
                      {session.difficulty}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-base-content/70">
                      <UserCircle size={16} />
                      {session.host?.name || "Unknown"}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-base-content/70">
                      <Users size={16} />
                      {session.participant ? "2 Participants" : "1 Participant"}
                    </div>

                  </div>

                  <button
                    onClick={() => navigate(`/api/sessions/${session.roomId}`)}
                    className={`btn ${
                      isUserInSession(session)
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                  >
                    <PlayCircle size={18} />

                    {isUserInSession(session)
                      ? "Resume"
                      : "Join"}
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}
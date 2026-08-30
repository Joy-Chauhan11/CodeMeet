import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";



export default function JoinSession() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();


  const { getToken } = useAuth();

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");



const handleJoin = async () => {
  if (!roomId.trim()) {
    setError("Please enter a session ID");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const token = await getToken();

    //  finding the session using roomId
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/sessions/${roomId.trim()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const session = response.data.session;

    // Join using MongoDB session _id
    await axios.post(
`${import.meta.env.VITE_API_URL}/api/sessions/${session.roomId}/join`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    //  enter the session
    navigate(`/api/sessions/${session.roomId}`);

  } catch (error) {
    console.error("Failed to join session:", error);

    setError(
      error.response?.data?.message ||
      "Unable to join session"
    );

  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">

      <div className="card w-96 bg-base-100 shadow-xl">

        <div className="card-body">

          <h2 className="card-title justify-center text-2xl">
            Join Session
          </h2>

          <p className="text-center text-base-content/60">
            Enter the session ID shared by the host.
          </p>

          <input
            type="text"
            placeholder="Enter Session ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleJoin();
              }
            }}
            className="input input-bordered w-full mt-4"
          />

          <button
            className="btn btn-primary w-full mt-3"
            onClick={handleJoin}
          >
            Join Session
          </button>

          <button
            className="btn btn-ghost w-full"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}
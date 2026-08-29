import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@clerk/clerk-react";

import Navbar from "../components/Navbar.jsx";
import WelcomeSection from "../components/WelcomeSection";
import StatsCards from "../components/StatsCard.jsx";
import ActiveSessions from "../components/ActiveSessions.jsx";
import RecentSessions from "../components/RecentSession.jsx";
import CreateSessionModal from "../components/CreateSessionModel.jsx";
import axios from "axios"



export default function DashboardPage() {
  const navigate = useNavigate();
  const { getToken } = useAuth();

const [recentSessions, setRecentSessions] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [roomConfig, setRoomConfig] = useState({
    problem: "",
    difficulty: "",
  });

  // ---------------- Mock Data ----------------

  const activeSessions = [
    {
      _id: "1",
      problem: "Two Sum",
      difficulty: "easy",
      host: {
        name: "Joy",
      },
      participant: {
        name: "Rahul",
      },
    },
    {
      _id: "2",
      problem: "Valid Parentheses",
      difficulty: "medium",
      host: {
        name: "Meet",
      },
      participant: null,
    },
  ];

  // const recentSessions = [
  //   {
  //     _id: "11",
  //     problem: "Merge Sorted Arrays",
  //     difficulty: "easy",
  //     createdAt: new Date(),
  //   },
  //   {
  //     _id: "12",
  //     problem: "Binary Search",
  //     difficulty: "medium",
  //     createdAt: new Date(),
  //   },
  //   {
  //     _id: "13",
  //     problem: "Reverse Linked List",
  //     difficulty: "hard",
  //     createdAt: new Date(),
  //   },
  // ];

  // ---------------- Functions ----------------

  const handleCreateRoom = async () => {
  try {
    const token = await getToken();

    const response = await axios.post(
     `${import.meta.env.VITE_API_URL}/api/sessions`,
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const roomId = response.data.session.roomId;

    navigate(`/api/sessions/${roomId}`);
  } catch (error) {
    console.log(error);
  }
};
  const isUserInSession = () => false;



useEffect(() => {
  const fetchRecentSessions = async () => {
    const token = await getToken();

    const response = await axios.get(
     `${import.meta.env.VITE_API_URL}/api/sessions/my-recent`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setRecentSessions(response.data.recentSessions);
  };

  fetchRecentSessions();
}, []);

  return (
    <>
      <div className="min-h-screen bg-base-300">

        <Navbar />

        <WelcomeSection
          onCreateSession={() => setShowCreateModal(true)}
        />

        <main className="container mx-auto px-6 pb-12">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left */}

            <div className="space-y-6">

              <StatsCards
                activeSessionsCount={activeSessions.length}
                recentSessionsCount={recentSessions.length}
              />

            </div>

            {/* Right */}

            <div className="lg:col-span-2">

              <ActiveSessions
                sessions={activeSessions}
                isLoading={false}
                isUserInSession={isUserInSession}
              />

            </div>

          </div>

          <div className="mt-8">

            <RecentSessions
              sessions={recentSessions}
            />

          </div>

        </main>

      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={false}
      />
      

    </>
  );
}





// import { useState } from "react";
// import { useNavigate } from "react-router";
// import { useUser } from "@clerk/clerk-react";

// import Navbar from "../components/Navbar";
// import WelcomeSection from "../components/WelcomeSection.jsx";
// import StatsCards from "../components/StatsCard.jsx";
// import ActiveSessions from "../components/ActiveSessions.jsx";
// import RecentSessions from "../components/RecentSession.jsx";
// import CreateSessionModal from "../components/CreateSessionModel.jsx";

// // import {
// //   useActiveSessions,
// //   useCreateSession,
// //   useMyRecentSessions,
// // } from "../hooks/useSessions";

// export default function DashboardPage() {
//   const navigate = useNavigate();
//   const { user } = useUser();

//   const [showCreateModal, setShowCreateModal] = useState(false);

//   const [roomConfig, setRoomConfig] = useState({
//     problem: "",
//     difficulty: "",
//   });

//   const createSessionMutation = useCreateSession();

//   const {
//     data: activeSessionsData,
//     isLoading: loadingActiveSessions,
//   } = useActiveSessions();

//   const {
//     data: recentSessionsData,
//     isLoading: loadingRecentSessions,
//   } = useMyRecentSessions();

//   // const activeSessions = activeSessionsData?.sessions || [];
//   // const recentSessions = recentSessionsData?.sessions || [];
//   const activeSessions = [
//   {
//     _id: "1",
//     problem: "Two Sum",
//     difficulty: "Easy",
//     host: {
//       name: "Joy",
//     },
//   },
// ];

//   const handleCreateRoom = () => {
//     if (!roomConfig.problem || !roomConfig.difficulty) return;

//     createSessionMutation.mutate(
//       {
//         problem: roomConfig.problem,
//         difficulty: roomConfig.difficulty.toLowerCase(),
//       },
//       {
//         onSuccess: (data) => {
//           setShowCreateModal(false);

//           setRoomConfig({
//             problem: "",
//             difficulty: "",
//           });

//           navigate(`/session/${data.session._id}`);
//         },
//       }
//     );
//   };

//   const isUserInSession = (session) => {
//     if (!user?.id) return false;

//     return (
//       session.host?.clerkId === user.id ||
//       session.participant?.clerkId === user.id
//     );
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-base-300">

//         <Navbar />

//         <WelcomeSection
//           onCreateSession={() => setShowCreateModal(true)}
//         />

//         <main className="container mx-auto px-6 pb-12">

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//             {/* Left Column */}
//             <div className="space-y-6">

//               <StatsCards
//                 activeSessionsCount={activeSessions.length}
//                 recentSessionsCount={recentSessions.length}
//               />

//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-2">

//               <ActiveSessions
//                 sessions={activeSessions}
//                 isLoading={loadingActiveSessions}
//                 isUserInSession={isUserInSession}
//               />

//             </div>

//           </div>

//           <div className="mt-8">

//             <RecentSessions
//               sessions={recentSessions}
//               isLoading={loadingRecentSessions}
//             />

//           </div>

//         </main>

//       </div>

//       <CreateSessionModal
//         isOpen={showCreateModal}
//         onClose={() => setShowCreateModal(false)}
//         roomConfig={roomConfig}
//         setRoomConfig={setRoomConfig}
//         onCreateRoom={handleCreateRoom}
//         isCreating={createSessionMutation.isPending}
//       />
//     </>
//   );
// }
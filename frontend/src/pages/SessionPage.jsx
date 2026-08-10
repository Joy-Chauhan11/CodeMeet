import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth,useUser } from "@clerk/clerk-react";
import axios from "axios";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { PROBLEMS } from "../data/problems";

import Navbar from "../components/Navbar";
import SessionHeader from "../components/SessionComponents/SessionHeader";
import ProblemTabs from "../components/ProblemTabs";
import CodeEditor from "../components/CodeEditor";
import CollaborationPanel from "../components/SessionComponents/CollaborationPanel";
import OutputPanel from "../components/outputPannel.jsx";

const EXECUTION_URL = import.meta.env.VITE_CODE_ENGINE_API;



import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";




export default function SessionPage() {
  const { roomId } = useParams();
  const { getToken } = useAuth();
  const { user } = useUser();
const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [language, setLanguage] = useState("javascript");
  const [messages, setMessages] = useState([]);
const [message, setMessage] = useState("");
const [socket, setSocket] = useState(null);
const [code, setCode] = useState("");
const [isRunning, setIsRunning] = useState(false);
const [output, setOutput] = useState("");
const [error, setError] = useState("");
const [testResults, setTestResults] = useState(null);
const [aiReview, setAiReview] = useState(null);


  // ==========================
  // Fetch Session
  // ==========================
  useEffect(() => {
    const loadSession = async () => {
      try {
        const token = await getToken();

        const response = await axios.get(
          `http://localhost:8080/api/sessions/${roomId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSession(response.data.session);
      } catch (error) {
        console.error("Failed to load session:", error);
      }
    };

    loadSession();
  }, [roomId, getToken]);

  // ==========================
  // Socket Connection
  // ==========================
  useEffect(() => {
    const socket = io("http://localhost:8080");
   
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Socket Connected:", socket.id);

      socket.emit("join-room", {
        roomId : roomId
      });

    });

    socket.on("room-full",({msg})=>{
      alert(msg);
      navigate("/");
      })


    socket.on("disconnect", () => {
      console.log("Socket Disconnected");
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId,navigate]);

  

const currentProblem = session
  ? Object.values(PROBLEMS).find(
      (problem) => problem.title === session.problem
    ) || null
  : null;

useEffect(() => {
  if (currentProblem) {
    setCode(currentProblem.starterCode[language]);
  }
}, [currentProblem, language]);

if (!session) {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}

if (!currentProblem) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-xl font-semibold">Problem not found.</h1>
    </div>
  );
}



  // ======On Run
  const handleRun = async () => {
  try {
    const response = await fetch(EXECUTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language,
        code,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to execute code");
    }

    const result = await response.json();

    console.log(result);

    setIsRunning(false);

if (result.success) {
    setOutput(result.stdout);
    setError(result.stderr);
}

    // Later you'll do:
    // setOutput(result);

  } catch (err) {
    console.error(err);
  }
};

  // ==========================
  // UI
  // ==========================
  return (
  <div className="h-screen flex flex-col bg-base-300">

    <Navbar />

    <SessionHeader session={session} />

    {/* Main Layout */}
    <PanelGroup direction="horizontal" className="flex-1">

      {/* ================= LEFT WORKSPACE ================= */}
      <Panel defaultSize={75} minSize={50}>

        <PanelGroup direction="vertical">

          {/* Problem + Editor */}
          <Panel defaultSize={75} minSize={40}>

            <PanelGroup direction="horizontal">

              {/* Problem */}
              <Panel defaultSize={30} minSize={20}>
                <div className="h-full overflow-hidden">
                  <ProblemTabs problem={currentProblem} />
                </div>
              </Panel>

              <PanelResizeHandle className="w-1 bg-base-300 hover:bg-primary cursor-col-resize transition-colors" />

              {/* Editor */}
              <Panel defaultSize={70} minSize={40}>
                <div className="h-full overflow-hidden">
                  <CodeEditor
                    problem={currentProblem}
                    language={language}
                    setLanguage={setLanguage}
                    code={code}
                    setCode={setCode}
                    socket={socket}
                    roomId={roomId}
                    onRun={handleRun }
                  />
                </div>
              </Panel>

            </PanelGroup>

          </Panel>

          <PanelResizeHandle className="h-1 bg-base-300 hover:bg-primary cursor-row-resize transition-colors" />

          {/* Output */}
          <Panel defaultSize={25} minSize={15} maxSize={40}>
            <div className="h-full overflow-hidden">
              <OutputPanel
                                      output={output}
                                      error={error}
                                      isRunning={isRunning}
                                      testResults={testResults}
                                      aiReview={aiReview}
                                          />
              
            </div>
          </Panel>

        </PanelGroup>

      </Panel>

      <PanelResizeHandle className="w-1 bg-base-300 hover:bg-primary cursor-col-resize transition-colors" />

      {/* ================= RIGHT COLLABORATION ================= */}
      <Panel defaultSize={25} minSize={20} maxSize={40}>
        <div className="h-full overflow-hidden">
          <CollaborationPanel
    socket={socket}
    roomId={roomId}
    session={session}
    currUser={user}
    messages={messages}
    setMessages={setMessages}
    message={message}
    setMessage={setMessage}
/>
        </div>
      </Panel>

    </PanelGroup>

  </div>
);
}
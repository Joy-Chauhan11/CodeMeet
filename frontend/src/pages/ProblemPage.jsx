import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";

import Navbar from "../components/Navbar.jsx";
import ProblemHeader from "../components/ProblemHeader.jsx";
import ProblemTabs from "../components/ProblemTabs.jsx";
import CodeEditor from "../components/CodeEditor.jsx";
import OutputPanel from "../components/outputPannel.jsx";
import { PROBLEMS } from "../data/problems.js";

import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";

const EXECUTION_URL = import.meta.env.VITE_CODE_ENGINE_API;
const JUDGE_URL = import.meta.env.VITE_CODE_ENGINE_API_JUDGE;



export default function ProblemPage() {
  const { id } = useParams();
  const { getToken } = useAuth();

  const problem = PROBLEMS[id];

  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(
    problem?.starterCode?.javascript || ""
  );

  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const [testResults, setTestResults] = useState(null);
  const [aiReview, setAiReview] = useState(null);

  if (!problem) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Problem not found</h1>
      </div>
    );
  }



const handleRun = async () => {
  try {
    setIsRunning(true);
    setOutput("");
    setError("");
    setTestResults(null);

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

    console.log("Execution result:", result);

    if (result.success) {
      setOutput(result.stdout);
      setError(result.stderr);
    } else {
      setError(result.stderr || "Code execution failed");
    }

  } catch (err) {
    console.error("Execution error:", err);
    setError(err.message);
  } finally {
    setIsRunning(false);
  }
};
// ============ Handle submit button 

const handleSubmit = async () => {
  try {
    setIsRunning(true);
    setError("");
    setTestResults(null);

    const token = await getToken();

    const response = await axios.post(
      JUDGE_URL,
      {
        language,
        code,
        testCases: problem.testCases,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Judge result:", response.data);

    setTestResults(response.data);

  } catch (error) {
    console.error(
      "Judge error:",
      error.response?.data || error
    );

    setError(
      error.response?.data?.message ||
      "Failed to judge code"
    );

  } finally {
    setIsRunning(false);
  }
};
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-base-100">

      {/* Navbar */}
      <Navbar />

      {/* Workspace */}
      <div className="flex-1 min-h-0">

        <PanelGroup
          direction="horizontal"
          className="h-full"
        >

          {/* ================= LEFT PANEL ================= */}

          <Panel
            defaultSize={32}
            minSize={22}
          >

            <div className="flex h-full min-h-0 flex-col border-r border-base-300">

              {/* Fixed Header */}
              <ProblemHeader problem={problem} />

              {/* Scrollable Body */}
              <div className="flex-1 min-h-0 overflow-y-auto">
                <ProblemTabs problem={problem} />
              </div>

            </div>

          </Panel>

          {/* Vertical Resize */}
          <PanelResizeHandle className="group relative  cursor-col-resize bg-base-300 transition-colors hover:bg-primary">

            <div
              className="
              absolute
              left-1/2
              top-0
              h-full
\              -translate-x-1/2
              bg-primary
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
            />

          </PanelResizeHandle>

          {/* ================= RIGHT PANEL ================= */}

          <Panel
            defaultSize={68}
            minSize={35}
          >

            <PanelGroup
              direction="vertical"
              className="h-full"
            >

              {/* Editor */}

              <Panel
                defaultSize={72}
                minSize={35}
              >

                <div className="h-full min-h-0">

                <CodeEditor
  problem={problem}
  language={language}
  setLanguage={setLanguage}
  code={code}
  setCode={setCode}
  socket={null}
  roomId={null}
  onRun={handleRun}
  onSubmit={handleSubmit}
/>

                </div>

              </Panel>

              {/* Horizontal Resize */}

              <PanelResizeHandle className="group relative cursor-row-resize bg-base-300 transition-colors hover:bg-primary">

                <div
                  className="
                  absolute
                  top-1/2
                  left-0
                  w-full
                  -translate-y-1/2
                  bg-primary
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
                />

              </PanelResizeHandle>

              {/* Output */}

              <Panel
                defaultSize={28}
                minSize={15}
              >

                <div className="h-full min-h-0">

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

        </PanelGroup>

      </div>

    </div>
  );
}

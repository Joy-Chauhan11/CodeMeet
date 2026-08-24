import { useState } from "react";
import axios from "axios"
import { useAuth } from "@clerk/clerk-react";



export default function OutputPanel({
  output = "",
  error = "",
  isRunning = false,
  testResults = null,
  problem,
  code
}) {
  const [activeTab, setActiveTab] = useState("tests");
const [aiReview, setAiReview] = useState(null);
const ai_Api = import.meta.env.VITE_AI_BACKEND_API;
const { getToken } = useAuth();

// const getReview = async () => {
//   try {
//     const token = await getToken();

//     const response = await axios.post(
//       ai_Api,
//       {
//         problem,
//         code,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log("AI Review:", response.data);

//     setAiReview(response.data.review);

//   } catch (error) {
//     console.error("AI Review Error:", error);
//   }
// };

const getReview = async () => {
  try {
    console.log("Problem sent to AI:", problem);
    console.log("Code sent to AI:", code);

    const token = await getToken();

    const response = await axios.post(
      ai_Api,
      {
        problem,
        code,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setAiReview(response.data.review);

  } catch (error) {
    console.error("AI Review Error:", error);
  }
};
// ...existing code...
  const tabs = [
    { id: "tests", label: "Test Cases" },
    { id: "output", label: "Output" },
    { id: "console", label: "Console" },
    { id: "ai", label: "AI Review" },
  ];

  const renderContent = () => {
    if (isRunning) {
      return (
        <div className="flex items-center justify-center h-full">
          <span className="loading loading-spinner loading-lg"></span>
          <span className="ml-3 text-base-content/70">
            Running...
          </span>
        </div>
      );
    }

    switch (activeTab) {
      // =========================
      // TEST CASES
      // =========================
      case "tests":
        if (!testResults) {
          return (
            <div className="h-full flex items-center justify-center text-base-content/50">
              Submit your code to run test cases.
            </div>
          );
        }

        return (
          <div className="space-y-4">

            {/* Summary */}
            <div
              className={`rounded-lg p-4 border ${
                testResults.status === "Accepted"
                  ? "border-success bg-success/10"
                  : "border-error bg-error/10"
              }`}
            >
              <div className="flex items-center justify-between">

                <div>
                  <h2
                    className={`text-lg font-semibold ${
                      testResults.status === "Accepted"
                        ? "text-success"
                        : "text-error"
                    }`}
                  >
                    {testResults.status === "Accepted"
                      ? "✓ Accepted"
                      : `✕ ${testResults.status}`}
                  </h2>

                  <p className="text-sm text-base-content/60 mt-1">
                    {testResults.passed} / {testResults.total} Test Cases Passed
                  </p>
                </div>

              </div>
            </div>

            {/* Individual Test Cases */}
            <div className="space-y-3">

             <div className="space-y-3">
  {testResults.results?.map((test, index) => (
    <div
      key={index}
      className={`border rounded-lg p-3 ${
        test.passed
          ? "border-success/30 bg-success/5"
          : "border-error/30 bg-error/5"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium">
          Test Case #{index + 1}
        </span>

        <span
          className={
            test.passed
              ? "text-success"
              : "text-error"
          }
        >
          {test.passed ? "✓ Passed" : "✕ Failed"}
        </span>
      </div>

      {/* Only show details for failed cases */}
      {!test.passed && (
        <div className="mt-3 space-y-2">

          <div>
            <p className="text-xs text-base-content/50">
              Input
            </p>

            <pre className="bg-base-200 rounded-md p-2 text-sm overflow-x-auto">
              {test.input}
            </pre>
          </div>

          <div>
            <p className="text-xs text-base-content/50">
              Expected
            </p>

            <pre className="bg-base-200 rounded-md p-2 text-sm overflow-x-auto">
              {test.expectedOutput}
            </pre>
          </div>

          <div>
            <p className="text-xs text-base-content/50">
              Your Output
            </p>

            <pre className="bg-base-200 rounded-md p-2 text-sm overflow-x-auto">
              {test.actualOutput?.trim() || "No output"}
            </pre>
          </div>

        </div>
      )}
    </div>
  ))}
</div>

            </div>
          </div>
        );

      // =========================
      // OUTPUT
      // =========================
     case "output":
  return (
    <div className="h-full flex flex-col gap-4">

      
      <div className="flex-1">

        <div className="text-sm font-semibold mb-2">
          Output
        </div>

        <pre className="bg-base-200 rounded-lg p-3 h-full overflow-auto whitespace-pre-wrap font-mono text-sm">
          {error ? (
            <span className="text-error">{error}</span>
          ) : output ? (
            output
          ) : (
            <span className="text-base-content/50">
              Click <strong>Run</strong> to execute your code.
            </span>
          )}
        </pre>

      </div>

    </div>
  );

      // =========================
      // CONSOLE
      // =========================
      case "console":
        return (
          <pre className="whitespace-pre-wrap wrap-break-words font-mono text-sm">
            {output || "Console output will appear here."}
          </pre>
        );

      // =========================
      // AI REVIEW
      // =========================
      case "ai":
        return (
          <div className="whitespace-pre-wrap">
            {(<>
              <p>{aiReview}</p>
             <button onClick={getReview} className="bg bg-gray-500 w-25 h-10 mt-5">Get Review</button>
              </>
            ) || (
              <button onClick={getReview} className="bg bg-gray-500 w-25 h-10">Get Review</button>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col bg-base-100 border-t border-base-300">

      {/* Tabs */}
      <div className="tabs tabs-boxed rounded-none border-b border-base-300 px-2 py-2 bg-base-200">

        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${
              activeTab === tab.id ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}

      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        {renderContent()}
      </div>

    </div>
  );
}
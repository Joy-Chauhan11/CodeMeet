import { useState } from "react";

export default function OutputPanel({
  output = "",
  error = "",
  isRunning = false,
  testResults = null,
  aiReview = null,
}) {
  const [activeTab, setActiveTab] = useState("output");

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
          <span className="ml-3 text-base-content/70">Running...</span>
        </div>
      );
    }

    switch (activeTab) {
      case "output":
        return (
          <pre className="whitespace-pre-wrap wrap-break-words font-mono text-sm">
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
        );

      case "console":
        return (
          <pre className="whitespace-pre-wrap wrap-break-words font-mono text-sm">
            {output || "Console output will appear here."}
          </pre>
        );

      case "tests":
        if (!testResults) {
          return (
            <div className="text-base-content/50">
              Submit your code to run test cases.
            </div>
          );
        }

        return (
          <div className="space-y-3">
            {testResults.map((test, index) => (
              <div
                key={index}
                className={`border rounded-lg p-3 ${
                  test.passed
                    ? "border-success bg-success/10"
                    : "border-error bg-error/10"
                }`}
              >
                <div className="font-semibold">
                  Test Case #{index + 1}
                </div>

                <div>Status: {test.passed ? "✅ Passed" : "❌ Failed"}</div>

                {test.expected && (
                  <div>Expected: {test.expected}</div>
                )}

                {test.actual && (
                  <div>Actual: {test.actual}</div>
                )}
              </div>
            ))}
          </div>
        );

      case "ai":
        return (
          <div className="whitespace-pre-wrap">
            {aiReview || (
              <span className="text-base-content/50">
                AI review will appear here.
              </span>
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
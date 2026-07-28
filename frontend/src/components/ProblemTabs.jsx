import { useState } from "react";
import { FileText, FlaskConical, ListChecks } from "lucide-react";

export default function ProblemTabs({ problem }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    {
      id: "description",
      label: "Description",
      icon: FileText,
    },
    {
      id: "examples",
      label: "Examples",
      icon: FlaskConical,
    },
    {
      id: "constraints",
      label: "Constraints",
      icon: ListChecks,
    },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col bg-base-100">

      {/* Tabs */}

      <div className="sticky top-0 z-10 bg-base-100 border-b border-base-300">
        <div className="flex overflow-x-auto">

          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 border-b-2 transition-all whitespace-nowrap

                ${
                  activeTab === tab.id
                    ? "border-emerald-300 text-emerald-100 font-semibold"
                    : "border-transparent text-base-content/60 hover:text-base-content"
                }
                `}
              >
                <Icon size={18} />

                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}

      <div className="flex-1 min-h-0 overflow-y-auto p-6">

        {/* DESCRIPTION */}

        {activeTab === "description" && (
          <div className="space-y-6">

            <p className="leading-8 text-base-content">
              {problem.description.text}
            </p>

            {problem.description.notes.length > 0 && (
              <div>

                <h3 className="font-semibold text-lg mb-3">
                  Notes
                </h3>

                <ul className="list-disc ml-6 space-y-3">

                  {problem.description.notes.map((note, index) => (
                    <li
                      key={index}
                      className="leading-7 text-base-content/80"
                    >
                      {note}
                    </li>
                  ))}

                </ul>

              </div>
            )}

          </div>
        )}

        {/* EXAMPLES */}

        {activeTab === "examples" && (
          <div className="space-y-8">

            {problem.examples.map((example, index) => (

              <div
                key={index}
                className="rounded-xl border border-base-300 bg-base-200 p-5"
              >

                <h3 className="font-semibold text-lg mb-4">
                  Example {index + 1}
                </h3>

                <div className="mb-4">

                  <p className="font-medium mb-2">
                    Input
                  </p>

                  <pre className="bg-neutral text-neutral-content rounded-lg p-4 overflow-x-auto">
                    <code>{example.input}</code>
                  </pre>

                </div>

                <div className="mb-4">

                  <p className="font-medium mb-2">
                    Output
                  </p>

                  <pre className="bg-neutral text-neutral-content rounded-lg p-4 overflow-x-auto">
                    <code>{example.output}</code>
                  </pre>

                </div>

                {example.explanation && (

                  <div>

                    <p className="font-medium mb-2">
                      Explanation
                    </p>

                    <p className="leading-7 text-base-content/80">
                      {example.explanation}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>
        )}

        {/* CONSTRAINTS */}

        {activeTab === "constraints" && (
          <div>

            <ul className="space-y-4">

              {problem.constraints.map((constraint, index) => (

                <li
                  key={index}
                  className="rounded-lg bg-base-200 border border-base-300 px-5 py-4"
                >
                  {constraint}
                </li>

              ))}

            </ul>

          </div>
        )}

      </div>

    </div>
  );
}
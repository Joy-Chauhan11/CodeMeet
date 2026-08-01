import { Code2, Sparkles, Plus } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

export default function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  const firstName = user?.firstName || "Developer";

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="hero bg-base-100 rounded-2xl shadow-lg border border-base-300">
        <div className="hero-content w-full justify-between flex-col lg:flex-row gap-8">

          {/* Left Side */}
          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <Code2 className="w-7 h-7 text-primary" />
              </div>

              <div>
                <h1 className="text-4xl font-bold">
                  Welcome back, {firstName} 👋
                </h1>

                <p className="text-base-content/70 mt-1">
                  Ready to collaborate, solve problems, and level up your coding
                  skills?
                </p>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">

              <div className="badge bg-emerald-300 text-gray-600 badge-lg gap-2 py-4 px-4">
                <Sparkles className="w-4 h-4" />
                Real-time Collaboration
              </div>

              <div className="badge badge-secondary badge-lg py-4 px-4">
                Code Execution
              </div>

              <div className="badge badge-accent badge-lg py-4 px-4">
                AI Feedback
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-end gap-4">

            <button
              onClick={onCreateSession}
              className="btn bg-emerald-700 text-gray-32 btn-lg gap-2"
            >
              <Plus className="w-5 h-5" />
              Create Session
            </button>

            <p className="text-sm text-base-content/60 text-right max-w-xs">
              Start a collaborative coding room and invite others to join.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
import React from "react";
import {
  Bookmark,
  Clock3,
  MemoryStick,
  Tag,
} from "lucide-react";

const difficultyColors = {
  Easy: "badge-success",
  Medium: "badge-warning",
  Hard: "badge-error",
};

export default function ProblemHeader({ problem }) {
  return (
    <div className="border-b border-base-300 p-6 bg-base-100">

      {/* Title */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            {problem.title}
          </h1>

          <div className="flex gap-2 mt-3 flex-wrap">

            <div
              className={`badge badge-lg ${
                difficultyColors[problem.difficulty]
              }`}
            >
              {problem.difficulty}
            </div>

            <div className="badge badge-outline">
              {problem.category}
            </div>
          </div>
        </div>

        <button className="btn btn-ghost btn-circle">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>

      
      {/* Tags */}

      <div className="mt-6">

        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4" />

          <span className="font-semibold">
            Topics
          </span>
        </div>

        <div className="flex flex-wrap gap-2">

          {problem.category.split("•").map((topic) => (
            <span
              key={topic}
              className="badge badge-outline badge-primary"
            >
              {topic.trim()}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}
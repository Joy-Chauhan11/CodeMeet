import { X, PlusCircle } from "lucide-react";

const PROBLEMS = [
  "Two Sum",
  "Valid Parentheses",
  "Merge Sorted Arrays",
  "Binary Search",
  "Reverse Linked List",
  "Longest Substring Without Repeating Characters",
];

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

export default function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-lg">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Create Coding Session
          </h2>

          <button
            className="btn btn-ghost btn-circle"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>

        {/* Problem */}
        <div className="form-control mb-5">

          <label className="label">
            <span className="label-text font-medium">
              Coding Problem
            </span>
          </label>

          <select
            className="select select-bordered w-full"
            value={roomConfig.problem}
            onChange={(e) =>
              setRoomConfig({
                ...roomConfig,
                problem: e.target.value,
              })
            }
          >
            <option value="">Select a problem</option>

            {PROBLEMS.map((problem) => (
              <option key={problem} value={problem}>
                {problem}
              </option>
            ))}
          </select>

        </div>

        {/* Difficulty */}
        <div className="form-control mb-8">

          <label className="label">
            <span className="label-text font-medium">
              Difficulty
            </span>
          </label>

          <div className="grid grid-cols-3 gap-3">

            {DIFFICULTIES.map((difficulty) => (
              <button
                key={difficulty}
                type="button"
                className={`btn ${
                  roomConfig.difficulty === difficulty
                    ? "btn-primary"
                    : "btn-outline"
                }`}
                onClick={() =>
                  setRoomConfig({
                    ...roomConfig,
                    difficulty,
                  })
                }
              >
                {difficulty}
              </button>
            ))}

          </div>

        </div>

        {/* Footer */}
        <div className="modal-action">

          <button
            className="btn btn-ghost"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="btn btn-primary gap-2"
            disabled={
              !roomConfig.problem ||
              !roomConfig.difficulty ||
              isCreating
            }
            onClick={onCreateRoom}
          >
            {isCreating ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Creating...
              </>
            ) : (
              <>
                <PlusCircle size={18} />
                Create Session
              </>
            )}
          </button>

        </div>

      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}
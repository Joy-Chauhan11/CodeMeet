import React from 'react'
import Navbar from '../components/navbar'
import { Link } from "react-router-dom";
import { PROBLEMS } from "../data/problems.js";

import {
  Code2Icon,
  ChevronRightIcon,
  SearchIcon
} from "lucide-react";

import { getDifficultyBadgeClass } from "../lib/utils";

export default function ProblemPage() {

const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;



  return (
  <>
  <Navbar />
  
<div className="p-10">
<div className=" p-10">
  <h1 className="text-5xl font-black mb-3">
    Code Challenges
  </h1>

  <p className="text-base-content/70 max-w-2xl">
    Practice interview-ready coding problems and improve your
    problem-solving skills before your next technical interview.
  </p>
</div>



<div className="flex flex-col lg:flex-row gap-4 justify-between mb-10 p-10">

  <div className="relative w-full lg:max-w-md">
    <SearchIcon
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40"
    />

    <input
        type="text"
        placeholder="Search problems..."
        className="input input-bordered w-full "
    />
</div>

  <div className="flex gap-2 flex-wrap">
    <button className="btn bg-emerald-400 text-black rounded-full hover:bg-emerald-500">
      All
    </button>

    <button className="btn btn-outline rounded-full">
      Easy
    </button>

    <button className="btn btn-outline rounded-full">
      Medium
    </button>

    <button className="btn btn-outline rounded-full">
      Hard
    </button>
  </div>

</div>


{/* Problem List */}
<div className="space-y-5">
  {problems.map((problem) => (
    <Link
      key={problem.id}
      to={`/problem/${problem.id}`}
      className="group block rounded-2xl border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left */}
        <div className="flex gap-5 flex-1">
          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <Code2Icon className="h-7 w-7 text-emerald-300 transition-transform duration-300 group-hover:rotate-6" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold">
                {problem.title}
              </h2>

              <span
                className={`badge badge-lg rounded-full ${getDifficultyBadgeClass(
                  problem.difficulty
                )}`}
              >
                {problem.difficulty}
              </span>
            </div>

            <p className="mt-1 text-sm uppercase tracking-wider text-emerald-300">
              {problem.category}
            </p>

            <p className="mt-4 text-base-content/70 leading-7">
              {problem.description.text}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <button className="btn bg-emerald-300 text-gray-700 group">
            Solve Challenge

            <ChevronRightIcon className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </Link>
  ))}
</div>
</div>

<div className="mt-12 card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Total Problems</div>
                <div className="stat-value text-primary">{problems.length}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">{easyProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">{mediumProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">{hardProblemsCount}</div>
              </div>
            </div>
          </div>
          </div> 

  </>
  )
}


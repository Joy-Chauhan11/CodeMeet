import heroImg from "../assets/hero.png";
import { Link } from "react-router-dom";
import logo from "../assets/Subject.svg"
import {
  SignInButton,
  useUser
} from "@clerk/clerk-react";

import {ArrowRightIcon, VideoIcon,Code2Icon ,UsersIcon} from "lucide-react"


function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 lg:px-20 py-6">
     <Link to="/" className="flex items-center gap-2">
  

  <h1 className="text-3xl font-bold">
    Code<span className="text-white">Meet</span>
  </h1>
</Link>

        <div className="hidden md:flex items-center gap-8 ">
          <Link to="/">Home</Link>
          <Link to="/problems">Problems</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <SignInButton mode="modal">
          <button className=" px-5 py-2 rounded-xl transition">
                     <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">

 Get Started</span>
          </button>
        </SignInButton>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* Left */}
          <div>
            <p className=" font-medium mb-4">
              Collaborative Coding Platform
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Ace Coding Interviews
              <br />
              Together.
            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-8">
              Practice coding interviews with an integrated code editor,
              real-time video calling, collaborative coding, screen sharing,
              and AI-powered feedback.
            </p>

           <div className="mt-10 flex flex-wrap items-center gap-4">
  {/* Primary Button */}
  <button className="btn btn-primary rounded-xl px-7 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 group">
    <span>Start Coding Now</span>
    <ArrowRightIcon className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
  </button>

  {/* Secondary Button */}
  <button className="btn btn-outline rounded-xl px-7 transition-all duration-300 hover:scale-105">
    Explore Problems
  </button>
</div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="CodeMeet"
              className="w-full max-w-xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 lg:px-20 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
         <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <VideoIcon className="size-8 text-primary" />
              </div>
              <h3 className="card-title">HD Video Call</h3>
              <p className="text-base-content/70">
                Crystal clear video and audio for seamless communication during interviews
              </p>
            </div>
          </div>

<div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Code2Icon className="size-8 text-primary" />
              </div>
              <h3 className="card-title">Live Code Editor</h3>
              <p className="text-base-content/70">
                Collaborate in real-time with syntax highlighting and multiple language support
              </p>
            </div>
          </div>

           <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <UsersIcon className="size-8 text-primary" />
              </div>
              <h3 className="card-title">Easy Collaboration</h3>
              <p className="text-base-content/70">
                Share your screen, discuss solutions, and learn from each other in real-time
              </p>
            </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Homepage;
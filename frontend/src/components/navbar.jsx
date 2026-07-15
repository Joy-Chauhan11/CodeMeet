import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Code2,
  House,
  UserRound,
} from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
import logo from "../assets/Subject.svg";

function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: House,
    },
    {
      name: "Problems",
      path: "/problems",
      icon: Code2,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-base-100/70 border-b border-base-300">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          {/* <img
            src={logo}
            alt="CodeMeet"
            className="w-11 h-11 object-contain transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          /> */}

          <div>
            <h1 className="text-4xl font-black tracking-wide">
              <span className="text-emerald-300">Code</span>Meet
            </h1>

            
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2 bg-base-200/60 rounded-2xl p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl transition-all duration-300
                ${
                  active
                    ? "bg-emerald-300   text-olive-950 shadow-lg"
                    : "hover:bg-base-300 text-shadow-base-300 hover:text-base-content"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="btn bg-emerald-300 hidden lg:flex rounded-xl">
            <span className="text-gray-700  ">Start Session</span>
          </button>

          <div className="avatar">
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-11 h-11 ring-2 ring-primary ring-offset-2 ring-offset-base-100",
                },
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
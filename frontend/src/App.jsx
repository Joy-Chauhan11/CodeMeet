import { Routes, Route, Navigate } from "react-router-dom";
import {
  SignedIn,SignedOut,SignInButton,SignUpButton,SignOutButton, UserButton,
  useUser,
} from "@clerk/clerk-react";
import Homepage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProblemPage from './pages/ProblemPage.jsx';
import {Toaster} from "react-hot-toast"

function App() {
const {isSignedIn} = useUser();

  return (
  <>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/problems" element={isSignedIn ? <ProblemPage/> : <Navigate to ={"/"}/>} />

        <Route path="/about" element={<AboutPage/>} />

    </Routes>

    <Toaster />
    </>
  )
}

export default App

import { Routes, Route, Navigate } from "react-router-dom";
import {
  SignedIn,SignedOut,SignInButton,SignUpButton,SignOutButton, UserButton,
  useUser,
} from "@clerk/clerk-react";
import Homepage from './pages/HomePage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ProblemPage from './pages/ProblemPage.jsx';
import {Toaster} from "react-hot-toast"

function App() {
const {isSignedIn,isLoaded} = useUser();

if(!isLoaded){
  return null
}
  return (
  <>
    <Routes>
        <Route path="/" element={!isSignedIn ? <Homepage/> : <Navigate to ={"/dashboard"}/>} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage/> : <Navigate to ={"/"}/>} />

        <Route path="/problems" element={isSignedIn ? <ProblemPage/> : <Navigate to ={"/"}/>} />


    </Routes>

    <Toaster />
    </>
  )
}

export default App

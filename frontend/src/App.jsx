
import { Routes, Route, Navigate } from "react-router-dom";
import {
  SignedIn,SignedOut,SignInButton,SignUpButton,SignOutButton, UserButton,
  useUser,
} from "@clerk/clerk-react";
import Homepage from './pages/HomePage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ProblemsPage from './pages/ProblemsPage.jsx';
import ProblemPage from "./pages/ProblemPage.jsx";
import JoinSession from "./components/JoinSession.jsx";

import {Toaster} from "react-hot-toast"
import SessionPage from "./pages/SessionPage.jsx";

function App() {
const {isSignedIn,isLoaded} = useUser();

if(!isLoaded){
  return null
}
  return (
  <>
    <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage/> : <Navigate to ={"/"}/>} />

        <Route path="/problems" element={isSignedIn ? <ProblemsPage/> : <Navigate to ={"/"}/>} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage/> : <Navigate to ={"/"}/>} />
        <Route path="/api/sessions/:roomId" element={isSignedIn ? <SessionPage/> : <Navigate to ={"/"}/>} />
        <Route path="/join-session" element={<JoinSession />} />

    </Routes>
    <Toaster />
    </>
  )
}

export default App ;

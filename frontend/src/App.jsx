import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {
  SignedIn,SignedOut,SignInButton,SignUpButton,SignOutButton, UserButton,
} from "@clerk/clerk-react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{color:'white' }} > WELCOME CODEMMET</h1>
    
      <SignedOut>
  <SignInButton  mode='modal'/>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
<UserButton/> 
    </>
  )
}

export default App

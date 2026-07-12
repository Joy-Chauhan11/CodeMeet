import React from 'react'
import {
  SignedIn,SignedOut,SignInButton,SignUpButton,SignOutButton, UserButton,
  useUser,
} from "@clerk/clerk-react";

import toast from "react-hot-toast"


function Homepage() {
  return (
  <>

<button
  onClick={() => toast.success("this is success toast")}
>
  Click here
</button>    
<div>Homepage</div>
    <SignedIn>
      <SignOutButton></SignOutButton>
    </SignedIn>
    <SignedOut>
      <SignUpButton><button>click me!!!</button></SignUpButton>
    </SignedOut>
    
    <UserButton/>
    
    </>
  )
}
  

export default Homepage
import React from 'react'
 import {
  SignOutButton,
  SignedIn,
  useUser
} from "@clerk/clerk-react";



function DashboardPage() {
  return (<>
    <div>DashboaredPage</div>
    <SignedIn>
    <SignOutButton>
      <button>
SignOut
      </button>
    </SignOutButton>
    </SignedIn>




   
    </>
  )
}

export default DashboardPage
import React from 'react'
 import {
  SignOutButton,
  SignedIn,
  useUser
} from "@clerk/clerk-react";
import Navbar from '../components/navbar';


function DashboardPage() {
  return (<>
  <Navbar/>

    <SignedIn>
    <SignOutButton>
      <button className='bg-amber-200 rounded-xl text-black h-15 w-20 justify-center'>
SignOut
      </button>
    </SignOutButton>
    </SignedIn>




   
    </>
  )
}

export default DashboardPage
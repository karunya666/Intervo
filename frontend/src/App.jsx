import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/clerk-react';

function App() {

  return (
    <>
      <h1>Welcome to the App</h1>
      <SignedOut>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>

    </>
  )
}

export default App

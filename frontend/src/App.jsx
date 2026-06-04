import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton, useUser, useAuth } from '@clerk/clerk-react';
import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import DashboardPage from './pages/DashboardPage';
import ProblemPage from './pages/ProblemPage';
import SessionPage from './pages/SessionPage';
import ResumeBuilder from "./pages/ResumeBuilder";
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setAuthToken } from './lib/axios';

function App() {
  const { isSignedIn, isLoaded } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const setToken = async () => {
      const token = await getToken();
      setAuthToken(token);
    };
    if (isSignedIn) setToken();
  }, [isSignedIn, getToken]);

  if (!isLoaded) return null;

  return (
    <>
    <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard"/>} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to="/"/>} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to="/"/>} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to="/"/>} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to="/"/>} />
        <Route path="/resume-builder" element={isSignedIn ? <ResumeBuilder /> : <Navigate to="/"/>} />
    </Routes>
    <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App;
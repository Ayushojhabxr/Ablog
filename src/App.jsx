import React, {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login , logout } from "./store/authSlice";
import { Footer, Header } from './components'
import { Outlet } from "react-router-dom";
import { DotLoader } from "react-spinners";

function App() {

  const[ loading  , setLoading ] = useState(true);
  const dispatch = useDispatch(); // use to dispatch the action ,, dispatch matlb action ko call karna

 
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <DotLoader size={80} />
    </div>
  );

}

export default App;
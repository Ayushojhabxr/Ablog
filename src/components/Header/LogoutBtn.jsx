import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useSelector } from "react-redux";
import { useEffect } from 'react'
import { fetchUserData } from '../../store/authSlice';

function LogoutBtn() {
  const userData = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())  
        }
        )
    }

    
  useEffect(() => {
    dispatch(fetchUserData()); // 🔹 Fetch user data when app loads
  }, [dispatch]);



  return (
    <button
    className="px-4 py-2 text-sm font-medium mb-6 cursor-pointer text-gray-200 transition duration-200 ease-in-out hover:text-white hover:bg-blue-600 rounded-lg"
    onClick={logoutHandler}
    >{userData && <p>Hi, {userData.fullName} ⏻</p>}</button>
  )
}

export default LogoutBtn

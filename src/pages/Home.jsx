import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { fetchUserData } from '../store/authSlice';

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const Loginn = () => {
        navigate("/login")
    }
    const userData = useSelector((state) => state.auth.userData);
     const dispatch = useDispatch();
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    useEffect(() => {
        dispatch(fetchUserData()); // 🔹 Fetch user data when app loads
      }, [dispatch]);
    
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-16 bg-gradient-to-b from-gray-100 to-gray-200 text-center">
            <Container>
                <div className="flex flex-col items-center justify-center space-y-6">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Welcome to <span className="text-blue-600">ABlog</span>
                </h1>
                <p className="text-xl text-gray-700 max-w-2xl">
                    Discover, create, and share amazing posts with the world. Join our community of passionate writers and readers.
                </p>
                <button 
                    className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                    onClick={Loginn}
                >
                    Login Now
                </button>
                </div>
            </Container>
            </div>
        )
    }
    else {
    return (
        <div className='w-full py-8 bg-gradient-to-b from-white to-gray-100'>
            <Container>
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    {userData && <span className="text-blue-500">Welcome, {userData.fullName}!</span>}
                </h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    Discover and explore the amazing posts in our community.
                </p>
                <div className='flex flex-wrap justify-center gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
}

export default Home
import React from 'react'
import {Container , Logo , LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' // y use hota hai k hum redux store se data ko read kar sakein
import { useNavigate } from 'react-router-dom'
function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
  
    const navItems = [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
  },
    ]
  
  
    return (
      <header className="py-4 shadow-md bg-black text-white w-full h-21 ">
      <Container>
      <nav className="flex items-center">
      <div className="mr-6 cursor-pointer">
        <Link to="/">
        <Logo width="70px" />
        </Link>
      </div>
      <ul className="flex ml-auto space-x-6">
        {navItems.map((item) =>
        item.active ? (
        <li key={item.name}>
        <button
          onClick={() => navigate(item.slug)}
          className="px-4 py-2 text-sm font-medium mb-6 cursor-pointer text-gray-200 transition duration-200 ease-in-out hover:text-white hover:bg-blue-600 rounded-lg"
        >
          {item.name}
        </button>
        </li>
        ) : null
        )}
        {authStatus && (
        <li>
        <LogoutBtn />
        </li>
        )}
      </ul>
      </nav>
      </Container>
      </header>
    );
}

export default Header

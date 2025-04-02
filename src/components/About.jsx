import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function About() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 rounded-2xl">
            <motion.h2 
                className="text-4xl font-extrabold mb-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Us
            </motion.h2>
            <motion.p 
                className="max-w-2xl text-center text-gray-300 sm:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Welcome to our platform! We are dedicated to providing top-quality courses and 
                resources to help you excel in your journey. Our mission is to make learning 
                accessible, engaging, and efficient.
            </motion.p>
            <motion.div 
                className="mt-8 flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <button className="px-6 py-3 bg-green-600 rounded-lg text-white font-medium hover:bg-green-500 transition"  onClick={()=> {  navigate("/") }  }  >Learn More</button>
                <button className="px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-500 transition"   onClick={()=> {  navigate("/Contact") }  }  >Contact Us</button>
            </motion.div>
        </div>
    );
}

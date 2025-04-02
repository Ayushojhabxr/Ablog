import { FaFacebook, FaTwitter, FaLinkedin, FaGithub  } from "react-icons/fa";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="bg-black text-white py-8 px-6 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <Logo className="w-32 h-auto mb-3" />
            <p className="mt-2 text-gray-400 text-center md:text-left">Sharing ideas, insights, and inspiration through words.</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="mt-2 space-y-2 text-center md:text-left">
              <button onClick={() => navigate("/")} className="text-gray-400 hover:text-white block">Home</button>
              <button onClick={() => navigate("/about")} className="text-gray-400 hover:text-white block">About</button>
              <button onClick={() => navigate("/")} className="text-gray-400 hover:text-white block">Blog</button>
              <button onClick={() => navigate("/Contact")} className="text-gray-400 hover:text-white block">Contact</button>
            </div>
          </div>

          {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/ayush.ojha.140/" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
            <a href="https://x.com/Ayush___ojha" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/ayush-ojha-977945253/" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
            <a href="https://github.com/Ayushojhabxr" className="text-gray-400 hover:text-white text-2xl"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Ablog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
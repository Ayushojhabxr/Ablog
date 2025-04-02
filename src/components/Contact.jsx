import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "./Logo";

export default function Contact() {
    return (
        <div className="py-6 px-6 mx-auto max-w-2xl bg-gray-900 text-white rounded-lg shadow-lg">
            <Logo/>
            <h2 className="mb-4 text-4xl font-extrabold text-center text-white">
                Contact Us
            </h2>
            <p className="mb-6 text-center text-gray-300 sm:text-lg">
                Got an issue? Want to send feedback? Need details about our Platform? Let us know.
            </p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Form submitted");
                    toast.success("Your feedback has been submitted. Thank you!", {
                        position: "top-right", // ✅ Fixed
                        top: "20px", // ✅ Fixed
                        autoClose: 3000,
                    });
                }}
                className="space-y-4"
            >
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-1 block w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:ring focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter First Name"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="mt-1 block w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:ring focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Last Name"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:ring focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="mt-1 block w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:ring focus:ring-blue-500 focus:border-blue-500"
                        placeholder="What issue/suggestion do you have?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        rows="6"
                        className="mt-1 block w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:ring focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Query/Suggestion..."
                    />
                </div>
                <button
                    type="submit"
                    className="w-full mt-4 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-500 transition-transform transform hover:scale-105"
                >
                    Send Message
                </button>
            </form>

            {/* ✅ Correct placement of ToastContainer */}
            <ToastContainer />
        </div>
    );
}

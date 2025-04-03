import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import { Button } from "../components";

export default function MyPosts() {
    const [userPosts, setUserPosts] = useState([]);
    const user = useSelector((state) => state.auth.userData?.userData); // ✅ Updated selector

    useEffect(() => {
        const fetchUserPosts = async () => {
            if (!user || !user.$id) {
                console.log("User data not available or user is not logged in.");
                return;
            }

            try {
                const allPostsResponse = await appwriteService.getPosts();
                const allPosts = allPostsResponse?.documents || []; // ✅ Ensure `documents` exists

                console.log("Fetched all posts:", allPosts);

                const filteredPosts = allPosts.filter(post => post.userId === user.$id);
                console.log("Filtered posts:", filteredPosts);

                setUserPosts(filteredPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchUserPosts();
    }, [user]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">📌 My Posts</h2>
            <p className="text-gray-600 mb-4">Here are the posts you have created: Refresh the page once to get them ....</p>

            {userPosts.length === 0 ? (
                <p className="text-gray-500">No posts found. Start writing now! ✍️</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userPosts.map((post) => (
                        <div key={post.$id} className="border p-4 rounded-lg shadow-md">
                            {post.featuredImage && (
                                <img
                                    src={appwriteService.getFilePreview(post.featuredImage)}
                                    alt={post.title}
                                    className="w-full h-40 object-cover rounded-md mb-3"
                                />
                            )}
                            <h3 className="text-lg font-semibold">{post.title}</h3>
                            <p className="text-gray-600">{post.content.substring(0, 100)}...</p>

                            <div className="flex justify-between mt-3">
                                <Link to={`/post/${post.$id}`} className="text-blue-500">Read More</Link>
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button className="bg-yellow-500">Edit</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

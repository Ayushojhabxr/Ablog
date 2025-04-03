import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import { Button } from "../components";

export default function MyPosts() {
    const [userPosts, setUserPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData); // Get logged-in user data
    const userId = userData?.userId; // Safely extract user ID

    console.log("🔍 Raw User Data from Redux:", userData);
    console.log("🔹 Extracted User ID:", userId);

    useEffect(() => {
        const fetchUserPosts = async () => {
            if (!userId) {
                console.log("⚠️ User is not logged in or data is missing.");
                return;
            }

            try {
                console.log("🟢 Fetching posts for user ID:", userId);
                const allPostsResponse = await appwriteService.getPosts();

                if (!allPostsResponse?.documents) {
                    console.log("⚠️ No documents found in API response.");
                    return;
                }

                console.log("📌 All Posts from API:", allPostsResponse.documents);

                // Debug: Check if userId exists in posts
                allPostsResponse.documents.forEach((post, index) => {
                    console.log(`🔎 Post ${index}:`, post);
                });

                // Ensure correct comparison by converting both to strings
                const filteredPosts = allPostsResponse.documents.filter(
                    (post) => String(post?.userId) === String(userId)
                );

                console.log("✅ Filtered Posts:", filteredPosts);
                setUserPosts(filteredPosts);
            } catch (error) {
                console.error("❌ Error fetching posts:", error);
            }
        };

        fetchUserPosts();
    }, [userId]); // Run effect when userId changes

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">📌 My Posts</h2>

            <p className="text-gray-600 mb-4">
                Here are the posts you have created: Refresh the page once to get them.
            </p>

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
                            <p className="text-gray-600">
                                {post.content?.substring(0, 100)}...
                            </p>

                            <div className="flex justify-between mt-3">
                                <Link to={`/post/${post.$id}`} className="text-blue-500">
                                    Read More
                                </Link>
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

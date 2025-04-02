import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
return (
    <div className='w-full py-8 bg-gray-100'>
            <Container>
                    <h1 className='text-3xl font-bold text-center text-gray-800 mb-6 underline decoration-blue-500'>
                            HERE ARE ALL THE BLOG POSTS
                    </h1>
                    <div className='flex flex-wrap justify-center gap-4'>
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

export default AllPosts
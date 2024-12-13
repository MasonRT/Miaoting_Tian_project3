import React, { useState, useEffect } from 'react';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h2>All Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <strong>{post.user.username}</strong>: {post.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

import { useState } from 'react'
import data from '../models/data.json'


function PostList() {
    const [posts] = useState(data)
  return (
    <>
        <h1>This is the post list</h1>
        {posts.map(post => {
            return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            )
        })}
    </>
  )
}

export default PostList
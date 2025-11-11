import { useEffect } from "react";
import { fetchPosts } from "./state/slice.js";
import { useDispatch, useSelector } from "react-redux";

import React from 'react'

function PostsList() {
    const posts = useSelector((state) => state.postsReducer.posts);
    const status = useSelector((state) => state.postsReducer.status);
    // console.log(posts);

     const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPosts())
  },[])

  if (status === "loading") return <h2>Loading....</h2>;

  if (status === "error") return <h2>Opps....</h2>;
    
  return (
    <>
    <div>PostsList</div>
    <section>
        {posts &&
          posts.map((item) => {
            return (
              <article key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
      </section>
    </>
  )
}

export default PostsList
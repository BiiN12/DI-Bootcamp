import { useState, useEffect } from "react";
import Article from "./Article";

const ArticleList = () => {
    const [posts, setPosts] = useState();
    const [userID, setUserID] = useState(2);

    const getPosts = async (id) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2');
        const data = res.json();

        setPosts(data)
    }
    catch (err) {
        console.log(err);
        
    }
}
}
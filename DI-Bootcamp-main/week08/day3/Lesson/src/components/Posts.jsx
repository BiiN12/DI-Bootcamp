import { useContext } from "react";
import { PostsContext } from "../App";

function Posts() {
    const {title} = useContext(PostsContext)
  return (
    <h4>{title}</h4>
  )
}

export default Posts
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/Posts/PostSlice";

const Posts = () => {
    const {posts, isLading, isError, error} = useSelector(state => state.posts);
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchPosts())
    }, [dispatch])


    let content;

    if(isLading){
        content = <h1>Loading post...</h1>
    }
    if(!isLading && isError){
        content = <h1>Error: {error}</h1>
    }
    if(!isLading && !isError && posts.length === 0){
        content = <h1>No post found</h1>
    }

    if(!isLading && !isError && posts.length > 0 ){
        content = posts.map(post => <div key={post.id}>{post.title}</div>)
    }
    return content;
};

export default Posts;
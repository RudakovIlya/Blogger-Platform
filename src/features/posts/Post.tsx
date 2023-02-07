import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation, useParams} from "react-router-dom";

const Post = () => {

    const [post, setPosts] = useState<any>(null)
    const {id} = useParams<{ id: string }>()
    const location = useLocation();
    console.log(location)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
            setPosts(response.data)

        })
    }, [])

    return (
        <div>
            <span>{location.search}</span> <span>{post && post.title}</span>
            <h1>       {post && post.title}</h1>
        </div>
    );
};

export default Post;
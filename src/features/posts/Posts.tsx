import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink, useLocation} from "react-router-dom";

export const Posts = () => {

        const [posts, setPosts] = useState<any []>([])
        const location = useLocation()
        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
                setPosts(response.data)
            })
        }, [])

        return (
            <div>
                <h1>{location.pathname}</h1>
                {
                    posts.length && posts.map(item => {
                        return <>
                            <div>
                                <NavLink to={`/posts/${item.id}`}>
                                    {item.title}
                                </NavLink>
                            </div>
                        </>
                    })
                }
            </div>
        );
    }
;

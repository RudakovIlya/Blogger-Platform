import {Layout} from "./Layout";
import {Posts} from "../features/posts/Posts";
import {Blogs} from "../features/blogs/Blogs";
import {Navigate, Route, Routes} from 'react-router-dom'
import {Post} from "../features/posts/Post";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<Navigate to={'blogs'}/>}/>
                <Route path={'blogs'} element={<Blogs/>}/>
                <Route path={'posts'} element={<Posts/>}/>
                <Route path={'posts/:id'} element={<Post/>}/>
            </Route>
        </Routes>
    );
};

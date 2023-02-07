import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ht-02-03.vercel.app/api/',
});

export const postsAPI = {}

export const blogsAPI = {
    getBlogs() {
        return instance.get('posts').then(response => response.data)
    }
}
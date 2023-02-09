import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

interface IPhotos {
    albumId: 1,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export const postsAPI = {
    getPosts() {
        return instance.get<IPhotos[]>('photos').then(response => response.data)
    },
    getPostDetails(id: string) {
        return instance.get<IPhotos>(`photos/${id}`).then(response => response.data)
    }
}
import {postsAPI} from "../../app/api";
import {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Card} from "../../components/Card/Card";
import {FlexContainer} from "../../components/FlexContainer";

export const Post = () => {

    const [post, setPosts] = useState<any>(null)
    const {id} = useParams<{ id: string }>()
    const location = useLocation();

    useEffect(() => {
        postsAPI.getPostDetails(id as string).then(data => {
            setPosts(data)
        })
    }, [])

    return (
        <FlexContainer wrap={'wrap'} margin={'0 -15px'}>
        </FlexContainer>
    );
};

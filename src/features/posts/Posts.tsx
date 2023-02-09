import {postsAPI} from "../../app/api";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {FlexContainer} from "../../components/FlexContainer";
import {Card} from "../../components/Card/Card";
import {FlexItem} from "../../end/FlexItem";

export const Posts = () => {

        const [photos, setPhotos] = useState<{
            albumId: number,
            id: number,
            title: string,
            url: string,
            thumbnailUrl: string
        } []>([])
        const location = useLocation()
        useEffect(() => {
            postsAPI.getPosts().then(data => setPhotos(data))
        }, [])

        const postCards = photos.length && photos.slice(0, 9).map(photo => {
            return (
                <FlexItem key={photo.id} flex={'1 1 33.333%'} gap={'0 15px'} mw={320}>
                    <Card
                        settings={{isColumn: true, imgView: 'circular'}}
                        content={photo}
                    />
                </FlexItem>
            )
        })

        return (
            <>
                <FlexContainer rgap={32} wrap={'wrap'} margin={'0 -15px'}>
                    {postCards}
                </FlexContainer>
            </>
        );
    }
;

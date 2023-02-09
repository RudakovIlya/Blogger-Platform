import {FC, memo} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FlexContainer} from "../FlexContainer";
import img from '../../end/Component.png'

interface IsColumn {
    isColumn?: boolean
}

const CardWrapper = styled.div<IsColumn>`
  display: flex;
  flex-direction: ${({isColumn = true}) => isColumn ? 'column' : 'row'};
  border-radius: 2px;
  background-color: transparent;
`

export interface ICardImage {
    variant?: 'rectangle' | 'circular'
}

const CardImage = styled.img<ICardImage & IsColumn>`
  display: block;
  width: ${({isColumn,}) => !isColumn ? '156px' : '100%'};
  height: ${({isColumn}) => !isColumn ? '156px' : '100%'};
  object-fit: cover;
  border-radius: ${({isColumn}) => !isColumn ? '50%' : 0};
`
const CardAvatar = styled.img<ICardImage>`
  display: block;
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 12px;
  }

`

const CardTitle = styled(Link)`
  font-weight: var(--fw-600);
  font-size: var(--xs-title);
  color: var(--colors-text);
  text-transform: capitalize;
  line-height: 1.334;
  margin-bottom: 0.35em;
`

const CardContent = styled.div`
  padding-top: 18px
`

const CardDescription = styled.p`
  font-weight: 400;
  font-size: var(--l-text);
  line-height: 1.43;
  color: var(--colors-text);
`

interface ICardContent {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

interface ICardSettings {
    isColumn?: boolean
    imgView?: 'circular' | 'rectangle'
}

interface ICard {
    content: ICardContent
    settings: ICardSettings
}


export const Card: FC<ICard & ICardSettings> = memo((props) => {
    const {content: {albumId, id, url, thumbnailUrl, title}} = props
    const {settings: {isColumn = false, imgView = 'rectangle'}} = props
    return (
        <CardWrapper isColumn={isColumn}>
            <CardImage isColumn={isColumn} variant={imgView}
                       src={img}/>
            <CardContent as={'h1'}>
                <FlexContainer>
                    {isColumn && <CardAvatar src={url}/>}
                    <div>
                        <CardTitle to={`/posts/${id}`}>{title}</CardTitle>
                        <CardDescription>{title}</CardDescription>
                    </div>
                </FlexContainer>
            </CardContent>
        </CardWrapper>
    )
});
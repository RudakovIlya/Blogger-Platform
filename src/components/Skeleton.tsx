import React from 'react';
import styled, {keyframes} from "styled-components";
import {FlexContainer} from "./FlexContainer";

const skeletonAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`

interface ISkeleton {
    variant?: 'circular' | 'rectangular' | 'text'
    w?: string | number
    h?: string | number
}

const checkType = (type: string | number | undefined) => typeof type === 'number' && type ? `${type}px` : type

const Skeleton = styled.span.attrs<ISkeleton>((props) => ({
        variant: 'text',
        w: props.w || 250 + 'px',
        h: props.h || 20 + 'px',
    }))
    < ISkeleton > `
  width: ${props => checkType(props.w)};
  height: ${props => checkType(props.h)};
  background: rgba(0, 0, 0, 0.11);
  border-radius: 4px / 6.7px;
  animation: 1.5s ease-in-out 0.5s infinite normal none running ${skeletonAnimation};
`

export const Skeletons = () => {
    return (
        <FlexContainer>
            <Skeleton/>
            <FlexContainer direction={'column'}>
                <Skeleton w={123} h={25}></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
            </FlexContainer>
        </FlexContainer>
    );
};

import {FC, PropsWithChildren} from 'react';
import {Title} from "./Title";
import {useLocation} from "react-router-dom";
import styled from "styled-components";

export const Main: FC<PropsWithChildren> = ({children}) => {
    const {pathname} = useLocation();
    const pageName = pathname.slice(1)
    return (
        <MainContainer>
            <Title tag={'h1'}>{pageName}</Title>
            {children}
        </MainContainer>
    );
};

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 24px;
`
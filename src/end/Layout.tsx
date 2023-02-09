import {Main} from "../components/MainContainer";
import {Aside} from "../components/Aside";
import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import {FlexContainer} from "../components/FlexContainer";

export const Layout = () => {
    return (
        <>
            <Header/>
            <FlexContainer>
                <Aside/>
                <Main>
                    <Outlet/>
                </Main>
            </FlexContainer>
        </>
    );
};

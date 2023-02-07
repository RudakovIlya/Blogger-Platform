import {Header} from "./Header";
import {Aside} from "./Aside";
import {Container} from "./Container";
import {FlexContainer} from "./FlexContainer";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Header/>
            <FlexContainer flexSize={'1 1 100%'}>
                <Aside/>
                <Container maxWidth={980}>
                    <Outlet/>
                </Container>
            </FlexContainer>
        </>
    );
};

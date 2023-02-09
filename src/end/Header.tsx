import styled from "styled-components";
import {Title} from "../components/Title";
import {Container} from "./Container";
import {changeTheme} from "../features/theme/themeSlice";
import {FlexContainer} from "../components/FlexContainer";
import {memo, useEffect} from "react";
import {MdOutlineBrightness6} from "react-icons/md";
import {useAppDispatch, useAppSelector} from "../app/hooks";

const SHeader = styled.header`
  background-color: var(--colors-bg-header-nav);
  box-shadow: var(--shadow);
  min-height: 60px;
  width: 100%;
  padding: 12px 0;
  z-index: 2;
  position: relative;
`
export const Header = memo(() => {

    const theme = useAppSelector(state => state.theme.theme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    const onClickHandler = () => dispatch(changeTheme(theme == 'dark' ? 'light' : 'dark'));

    return (
        <SHeader>
            <Container>
                <FlexContainer justify={'space-between'} align={'center'}>
                    <Title tag={'h1'}>Blogger Platform</Title>
                    <button onClick={onClickHandler}>
                        <MdOutlineBrightness6 color={theme === 'dark' ? '#FAF7F8' : '#1A1718'} size={30}/>
                    </button>
                </FlexContainer>
            </Container>
        </SHeader>
    )
})
import styled from "styled-components";
import {Container} from "./Container";
import {FlexContainer} from "./FlexContainer";
import {memo, useEffect} from "react";
import {Title} from "./Title";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {changeTheme} from "../features/theme/themeSlice";
import {MdOutlineBrightness6} from "react-icons/md";

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
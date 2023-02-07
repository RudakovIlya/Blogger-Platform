import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FlexContainer} from "./FlexContainer";
import {MdOutlineFormatIndentDecrease} from "react-icons/md";

const SAside = styled.aside`
  min-height: calc(100vh - 60px);
  padding-top: 43px;
  min-width: 250px;
  box-shadow: var(--shadow);
  background-color: var(--colors-bg-header-nav);
`

const SNavLink = styled(NavLink)`
  color: var(--colors-text);
  font-size: var(--l-text);

  &.active {
    color: #F8346B
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const Aside = () => {
    return (
        <SAside>
            <FlexContainer tag={'div'} direction={'column'} justify={'center'} align={'center'}>
                <SNavLink to={'/blogs'}>
                    <FlexContainer tag={'span'}>
                        <MdOutlineFormatIndentDecrease style={{marginRight: 12}}/>
                        Blogs
                    </FlexContainer>
                </SNavLink>
                <SNavLink to={'/posts'}>
                    <FlexContainer tag={'span'}>
                        <MdOutlineFormatIndentDecrease style={{marginRight: 12}}/>
                        Posts
                    </FlexContainer>
                </SNavLink>
            </FlexContainer>
        </SAside>
    )
}
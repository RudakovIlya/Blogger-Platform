import {memo} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FlexContainer} from "./FlexContainer";
import {MdGridView, MdList} from "react-icons/md";

const SAside = styled.aside`
  text-align: center;
  height: 100%;
  padding-top: 43px;
  min-width: 250px;
  box-shadow: var(--shadow);
  background-color: var(--colors-bg-header-nav);
`

const SNavLink = styled(NavLink)`
  color: var(--colors-text);
  font-size: var(--l-text);
  position: relative;
  line-height: 1.7;

  &.active {
    color: var(--active-link);
    border-right: 2px solid var(--active-link);
  }

  svg {
    vertical-align: middle;
  }
`

export const Aside = memo(() => {
    return (
        <SAside>
            <FlexContainer tag={'div'} direction={'column'} align={'stretch'} rgap={24}>
                <SNavLink to={'/blogs'}>
                    <MdList style={{marginRight: 12}} size={24}/>
                    Blogs
                </SNavLink>
                <SNavLink to={'/posts'}>
                    <MdGridView style={{marginRight: 12}} size={24}/>
                    Posts
                </SNavLink>

            </FlexContainer>
        </SAside>
    )
})
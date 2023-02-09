import styled from "styled-components";
import {stringToCSS} from "../utils/stringToCSS";

interface IFlexItem {
    flex?: string | number
    gap?: string | number
    mw?: string | number
}

export const FlexItem = styled.div.attrs<IFlexItem>(({gap = '0 0 0 0', flex = '1 1 auto'}) => ({
    flex,
    gap,
}))<IFlexItem>`
  flex: ${props => props.flex};
  padding: ${props => stringToCSS(props.gap)};
  min-width: ${props => stringToCSS(props.mw)};
`
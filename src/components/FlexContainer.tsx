import React, {FC, PropsWithChildren, ReactNode} from 'react';
import styled from "styled-components";

interface IStyledFlex {
    flex?: "inline-flex" | "flex";
    direction?: "column" | "row";
    align?: string;
    justify?: string;
    flexSize?: string | number
    margin?: string;
}

interface IFlexContainer {
    tag?: keyof JSX.IntrinsicElements
    children?: ReactNode
    className?: string | undefined
}

const Flex: FC<PropsWithChildren & IStyledFlex & IFlexContainer> = ({tag, className, children}) => {
    const Tag = tag || "div"
    return (
        <Tag className={className}>{children}</Tag>
    );
};

export const FlexContainer = styled(Flex)<IStyledFlex>`
  display: ${props => props.flex || "flex"};
  flex: ${props => props.flexSize || "auto"};
  flex-direction: ${props => props.direction || "row"};
  align-items: ${props => props.align || "flex-start"};
  justify-content: ${props => props.justify || "flex-start"};
  margin: ${({margin}) => margin || "0"};
`;

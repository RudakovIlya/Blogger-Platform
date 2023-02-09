import styled from "styled-components";
import React, {ElementType, FC, HTMLAttributes, PropsWithChildren, ReactNode} from 'react';

interface IStyledFlex {
    rgap?: number
    flex?: "inline-flex" | "flex";
    align?: string;
    margin?: string;
    flexis?: string | number
    justify?: string;
    direction?: "column" | "row";
    wrap?: 'wrap' | 'no-wrap'
}

interface IFlexContainer extends HTMLAttributes<HTMLOrSVGElement> {
    tag?: ElementType
    children?: ReactNode
    className?: string | undefined
}

const Flex: FC<PropsWithChildren & IFlexContainer> = ({tag, className, children, ...props}) => {
    const Tag = tag || 'div'
    return (
        <Tag className={className} {...props}>{children}</Tag>
    );
};

export const FlexContainer = styled(Flex).attrs<IStyledFlex>(({rgap = 0}) => ({
    rgap
}))<IStyledFlex>`
  display: ${props => props.flex || "flex"};
  row-gap: ${props => props.rgap + 'px'};
  flex: ${props => props.flexis || "auto"};
  flex-wrap: ${({wrap = 'no-wrap'}) => wrap};
  flex-direction: ${props => props.direction || "row"};
  align-items: ${props => props.align || "flex-start"};
  justify-content: ${props => props.justify || "flex-start"};
  margin: ${({margin}) => margin || "0"};
`;


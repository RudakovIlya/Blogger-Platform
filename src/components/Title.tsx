import {DetailedHTMLProps, ElementType, FC, HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

interface IHeading extends HTMLAttributes<HTMLOrSVGElement> {
    tag?: ElementType
    children?: ReactNode
    className?: string | undefined
}

const Heading: FC<IHeading> = ({tag, children, className}) => {
    const Tags = tag || 'h1'
    return <Tags className={className}>{children}</Tags>;
};

export const Title = styled(Heading)`
  color: var(--colors-text);
  font-size: var(--l-title);
  font-weight: var(--fw-600);
  text-transform: capitalize;
`
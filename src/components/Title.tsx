import {FC, ReactNode} from "react";
import styled from "styled-components";

interface IHeading {
    tag: 'h1' | 'h2' | 'h3'
    children?: ReactNode
    className?: string | undefined
}

interface ITitle {

}

const Heading: FC<IHeading> = ({tag, children, className}) => {
    const Tags = tag || 'h1'
    return <Tags className={className}>{children}</Tags>;
};

export const Title = styled(Heading)<ITitle>`
  color: var(--colors-text);
  font-size: var(--l-title);
  font-weight: var(--fw-600);
  text-transform: capitalize;
`
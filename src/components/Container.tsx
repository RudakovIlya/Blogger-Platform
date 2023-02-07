import styled from "styled-components";

interface IContainer {
    maxWidth?: string | number
}

export const Container = styled.div.attrs<IContainer>(({maxWidth = 1190}) => ({maxWidth: maxWidth}))<IContainer>`
  max-width: ${(props) => typeof (props.maxWidth) === 'number' ? `${props.maxWidth}px` : props.maxWidth};
  margin: 0 auto;
  padding: 0 20px
`

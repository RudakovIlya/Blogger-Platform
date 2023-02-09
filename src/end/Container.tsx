import styled from "styled-components";

interface IContainer {
    margin?: string
}

export const Container = styled.div.attrs<IContainer>(({margin = '0 auto'}) => ({
    margin,
}))<IContainer>`
  margin: ${props => props.margin};
  padding: 0 20px;
`

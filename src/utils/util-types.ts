import styled from "styled-components";

type SXType = {
    [key: string]: string
}

type SXComponent<D> = { sx?: SXType } & D

export type CSSXType<T> = SXComponent<Partial<T>>

// export const Button = styled.button<SXType<Partial<ButtonType>>>`
//   ${(props) => ({...props.sx})}
// `
import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  nav,
  footer,
  header,
  aside {
    display: block;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  input,
  button,
  textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
    background: transparent;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  #root {
    font-family: Inter, sans-serif;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    /*Titles fz*/
    --l-title: 26px;
    --m-title: 20px;
    --s-title: 18px;

    /*Font-Weight*/
    --fw-600: 600;
    --fw-500: 500;
    --fw-400: 400;


    /*Line-Height*/
    --l-lh: 1.4;
    --m-lh: 1.3;
    --s-lh: 1.2;

    /*Text*/
    --l-text: 14px;
    --m-text: 12px;
  }

  body[data-theme="dark"] {
    --colors-text: #FAF7F8;
    --colors-bg-header-nav: #202124;
    --colors-bg-main: #202124;
    --shadow: 0px 5px 20px rgba(29, 33, 38, 0.03), 0px 1px 2px rgba(29, 33, 38, 0.1);
  }

  body[data-theme="light"] {
    --colors-text: #1A1718;
    --colors-bg-header-nav: #FCFBFB;
    --colors-bg-main: #FAF7F8;
    --shadow: 0px 5px 20px rgba(29, 33, 38, 0.03), 0px 1px 2px rgba(29, 33, 38, 0.1);
  }

`
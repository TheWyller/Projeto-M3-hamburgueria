import styled, { createGlobalStyle, css } from "styled-components";

const breakpoints = [
  {
    break: 1024,
    height: "80px",
    flexdirection: "row",
    justifyContent: "space-around",
  },
  {
    break: 767,
    height: "25vh",
    flexdirection: "column",
    justifyContent: "center",
  },
];

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: boder-box;
        margin: 0;
        padding: 0;
    }
    button{
        cursor:pointer
    }
    ul,li, ol{
        list-style: none;
    }
    body{
        background: #FFFFFF
    }

`;

export const Container = styled.header`
  width: 100vw;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  align-content: center;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  ${breakpoints.map(
    (elem) => css`
      @media (max-width: ${elem.break}px) {
        height: ${elem.height};
        flex-direction: ${elem.flexdirection};
        justify-content: ${elem.justifyContent};
      }
    `
  )};
`;

import styled, { css } from "styled-components";

const breakpoints = [
  {
    break: 1024,
    width: "65vw",
    flexWrap: "wrap",
    flexdirection: "unset",
    padding: "32px 0 0 0",
    maxWidth: 550,
  },
  {
    break: 1440,
    width: "965px",
    flexWrap: "wrap",
    flexdirection: "unset",
    padding: "32px 0 0 0px",
    maxWidth: 1000,
  },
];

export const ShowCase = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: auto;
  overflow-x: scroll;
  gap: 20px;
  padding: 15px 0 0 16px;
  ${breakpoints.map(
    (elem) => css`
      @media (min-width: ${elem.break}px) {
        width: ${elem.width};
        flex-direction: ${elem.flexdirection};
        flex-wrap: ${elem.flexWrap};
        padding: ${elem.padding};
        overflow-x: unset;
        max-width: ${elem.maxWidth}px;
        margin-right: 65px;
        justify-content: flex-end;
        align-content: flex-start;
      }
    `
  )}
`;

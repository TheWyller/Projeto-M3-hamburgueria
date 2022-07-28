import styled, { css } from "styled-components";
const breakpoints = [
  {
    break: 1024,
    width: 150,
    height: 173,
  },
  {
    break: 1440,
    width: 300,
    height: 346,
  },
];
export const CardFood = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 346px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  margin-top: 0;
  transition: 0.3s;

  ${breakpoints.map(
    (elem) => css`
      @media (min-width: ${elem.break}px) {
        width: ${elem.width}px;
        height: ${elem.height}px;
      }
    `
  )}
`;

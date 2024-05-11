import styled from "styled-components";

export const CenteredContainer = styled.div`
  margin: 0 auto;
  padding: 9.6rem 6.4rem 3.2rem 6.4rem;
  ${(props) => `background-color: ${props.color}`};
`;

CenteredContainer.defaultProps = {
  color: "#fff8d9",
};

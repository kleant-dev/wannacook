import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

const StyledSpinner = styled.div`
  &,
  & div {
    box-sizing: border-box;
  }

  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color:transparent;

  & div {
    position: absolute;
    width: 6.4px;
    height: 6.4px;
    background: currentColor;
    border-radius: 50%;
    animation: ${spinAnimation} 1.2s linear infinite;
  }
  & div:nth-child(1) {
    animation-delay: 0s;
    top: 36.8px;
    left: 66.24px;
  }
  & div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22.08px;
    left: 62.29579px;
  }
  & div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11.30421px;
    left: 51.52px;
  }
  & div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7.36px;
    left: 36.8px;
  }
  & div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11.30421px;
    left: 22.08px;
  }
  & div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22.08px;
    left: 11.30421px;
  }
  & div:nth-child(7) {
    animation-delay: -0.6s;
    top: 36.8px;
    left: 7.36px;
  }
  & div:nth-child(8) {
    animation-delay: -0.7s;
    top: 51.52px;
    left: 11.30421px;
  }
  & div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62.29579px;
    left: 22.08px;
  }
  & div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66.24px;
    left: 36.8px;
  }
  & div:nth-child(11) {
    animation-delay: -1s;
    top: 62.29579px;
    left: 51.52px;
  }
  & div:nth-child(12) {
    animation-delay: -1.1s;
    top: 51.52px;
    left: 62.29579px;
  }
`;

function Spinner() {
  return (
    <StyledSpinner>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledSpinner>
  );
}

export default Spinner;

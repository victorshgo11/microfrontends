import styled from "styled-components";

export const Image = styled.img`
  height: 35vh;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: spin infinite 20s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

import styled from "styled-components";

export const GridComponent = styled.div`
  display: grid;
  grid-template: auto auto / 2fr 1fr;
  max-width: 80rem;
  margin: 0 auto;
  @media (max-width: 960px) {
    grid-template: auto / 1fr;
  }
  video {
    width: 100%;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  .w-content {
    .list {
      margin: 0 32px;
      @media (max-width: 960px) {
        margin-top: 18px;
        margin-left: 10px;
        margin-right: 10px;
      }
      li {
        &:not(:nth-child(1)) {
          margin-top: 12px;
        }
        display: grid;
        grid-template: auto auto/ 1fr 1.5fr;
        .thumbnail {
          display: flex;
          img {
            width: 100%;
          }
        }

        .scope-text {
          margin-left: 18px;
          font-size: 13px;
        }
      }
    }
  }
`;

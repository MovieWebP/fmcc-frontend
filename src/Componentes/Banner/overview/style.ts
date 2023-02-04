import styled from "styled-components";

export const Overview = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.2rem;
  font-weight: 450;
  display: flex;
  @media screen and (max-width: 700px) and (min-width: 601px) {
    font-size: 1.4rem;
  };
  @media screen and (max-width: 600px) and (min-width: 501px) {
    font-size: 1.3rem;
  };
  @media screen and (max-width: 500px) and (min-width: 300px) {
    display: none;
  };
`;
import styled from "styled-components";

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.white};
  font-size: 2rem;
  margin-bottom: 3px;
  font-weight: 500;
  @media screen and (max-width: 500px) and (min-width: 300px) {
    font-size: 2.5rem;
  };
`;

export const Date = styled.h2`
  color: ${(props) => props.theme.lightPurple};
  font-weight: 500;
  font-size: 1rem;
  @media screen and (max-width: 700px) and (min-width: 601px) {
    font-size: 1.3rem;
  };
  @media screen and (max-width: 600px) and (min-width: 501px) {
    font-size: 1.3rem;
  };
  @media screen and (max-width: 500px) and (min-width: 300px) {
    font-size: 1.5rem;
  };
`;
import { BsPlayFill } from "react-icons/bs";
import styled from "styled-components";

export const Button = styled.div`
  border-radius: 5px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.purple};
  width: 7.8rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .6rem;
  transition: all .3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.lightPurple};
    cursor: default;
  }
  @media screen and (max-width: 700px) and (min-width: 501px) {
    margin-top: 1rem;
    width: 9.5rem;
    height: 2.8rem;
  };
  @media screen and (max-width: 500px) and (min-width: 300px) {
    width: 11.5rem;
    height: 3rem;
  };
`;

export const PlayIcon = styled(BsPlayFill)`
  font-size: 1.5rem;
  @media screen and (max-width: 700px) and (min-width: 501px) {
    font-size: 1.8rem;
  };
  @media screen and (max-width: 500px) and (min-width: 300px) {
    font-size: 2rem;
  };
`;

export const ButtonText = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  @media screen and (max-width: 700px) and (min-width: 501px) {
    font-size: 1.5rem;
  };
  @media screen and (max-width: 500px) and (min-width: 300px) {
    font-size: 1.6rem;
  };
`;
import { motion } from "framer-motion";
import { BsPlayFill } from "react-icons/bs";
import styled from "styled-components";


export const Wrap = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  ::-webkit-scrollbar{
    display: none;
  }
  scrollbar-width:none;
  height: 38rem;
  @media screen and (max-width: 500px) and (min-width: 300px) {
    height: 38rem;
  };
`;

export const Banner = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: start ;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
`;

export const ImageWrap = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  justify-content: center;
`;

export const MainImage = styled(motion.div) < { bgphoto: string }> `
  justify-content: center;
  z-index: -100;
  display: flex;
  background-image: 
  linear-gradient(
    rgba(19, 16, 16, 0.3),
    rgba(19, 16, 16, 0.3),
    #181818
    ), 
    url(${(props) => props.bgphoto});
    filter: blur(4px);
    background-size: cover;
    object-fit: cover;
    width: 100%;
    height: 40rem;
    resize: both;  
    align-items: center;
    align-self: center;
    @media screen and (max-width: 500px) and (min-width: 300px) {
    height: 38rem;
  };
`;

export const BannerImage = styled.div< { bgphoto: string }>`
  z-index: 1;
  width: 50rem;
  height: 25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 50px;
  background-image: url(${(props) => props.bgphoto});
  align-self: center;
  background-size: cover;
  object-fit: cover;
  border-radius: 10px;
  @media screen and (max-width: 600px) and (min-width: 501px) {
    width: 43rem;
    height: 22rem;
  };
  @media screen and (max-width: 500px) and (min-width: 300px) {
    width: 38rem;
    height: 20rem;
  };
`;


export const BannerWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 0 10px;
  width: 49rem;
  height: 9rem;
  margin-bottom: .4rem;
  align-items: center;
  @media screen and (max-width: 700px) and (min-width: 601px) {
    height: 10.5rem;
  };
  @media screen and (max-width: 600px) and (min-width: 501px) {
    width: 42rem;
    height: 10.5rem;
  };
  @media screen and (max-width: 500px) and (min-width: 300px) {
    width: 37rem;
    height: 8rem;
  };
`;

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

export const Overview = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.2rem;
  font-weight: 450;
  display: flex;
  flex-wrap: wrap;
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
  font-weight: 650;
  @media screen and (max-width: 700px) and (min-width: 501px) {
    font-size: 1.5rem;
  };
  @media screen and (max-width: 500px) and (min-width: 300px) {
    font-size: 1.8rem;
  };
`;


export const ArrowBox = styled.span`
  position: relative;
  top: 20px;
  opacity: 0.5;
  transition: all .3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
export const HiddenBox = styled(ArrowBox)`
  visibility: hidden;
`;

export const RightArrow = styled(ArrowBox)`
`;
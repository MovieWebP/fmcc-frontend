import { motion } from "framer-motion";
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
        height: 28rem;
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
  @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 32rem;
        height: 15rem;
  };
`;


export const BannerWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 0 10px;
  width: 49rem;
  height: 10rem;
  margin-bottom: .4rem;
  align-items: center;
  @media screen and (max-width: 500px) and (min-width: 300px) {
    padding: 0 5px;
    margin-bottom: 3px;
    width: 30rem;
    border-radius: 5px;
    height: 7.7rem;
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
    font-size: 1.5rem;
    padding-top: 2px;
  };
`;

export const Overview = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.2rem;
  font-weight: 450;
  display: flex;
  flex-wrap: wrap;
`;

export const Date = styled.h2`
  color: ${(props) => props.theme.lightPurple};
  font-weight: 500;
  font-size: 1rem;
`;

export const Button = styled.div`
  border-radius: 5px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.purple};
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .8rem;
  transition: all .3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.lightPurple};
    cursor: default;
  }
  @media screen and (max-width: 500px) and (min-width: 300px) {
    width: 5rem;
    height: 1.5rem;
    border-radius: 3px;
  };
`;

export const ButtonText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  @media screen and (max-width: 500px) and (min-width: 300px) {
    font-size: 0.7rem;
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
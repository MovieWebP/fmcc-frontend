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
  height: fit-content;
`;

export const AllWrap = styled(Wrap)`
  height: 30rem;  
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

export const MainImage = styled(motion.div) < { bgPhoto: string }> `
  justify-content: center;
  z-index: -100;
  display: flex;
  background-image: 
  linear-gradient(
    rgba(19, 16, 16, 0.3),
    rgba(19, 16, 16, 0.3),
    #181818
    ), 
    url(${(props) => props.bgPhoto});
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

export const BannerImage = styled.div< { bgPhoto: string }>`
  z-index: 1;
  width: 45rem;
  height: 22rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 50px;
  background-image: url(${(props) => props.bgPhoto});
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
  width: 40rem;
  height: 8rem;
  max-width: 600px;
  margin-bottom: 10px;
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
  font-size: 1rem;
  font-weight: 300;
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
  width: 7rem;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  transition: all .3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.lightPurple};
    cursor: default;
  }
  @media screen and (max-width: 500px) and (min-width: 300px) {
    width: 5rem;
    height: 1.5rem;
    /* margin-top: 0; */
    border-radius: 3px;
  };
`;

export const ButtonText = styled.h2`
  /* position: relative;
  top: 2px; */
  font-weight: 500;
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
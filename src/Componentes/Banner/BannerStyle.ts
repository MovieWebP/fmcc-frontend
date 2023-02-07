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
  linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%),
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

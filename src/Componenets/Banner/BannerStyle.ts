import { motion } from "framer-motion";
import styled from "styled-components";


export const Wrap = styled.div`
  position: relative;
  width: 100%;
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
  height: 400px;  
`;

export const Banner = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  height: 400px;
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
    width: 100%;
    height: 100%;
    resize: both;  
    align-items: center;
`;

export const BannerImage = styled.div< { bgPhoto: string }>`
  z-index: 1;
  width: 650px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 50px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  border-radius: 10px;
`;

export const BannerWrap = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 0 10px;
  padding-bottom: 5px;
  width: 80%;
  max-width: 600px;
  margin-bottom: 10px;
  bottom: 20px;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.white};
  font-size: 25px;
  margin-bottom: 3px;
  font-weight: 500;
  @media screen and (min-width: 1500px) {
    font-size: ${props => props.theme.superBig};
  };
  @media screen and (max-width: 1500px) and (min-width: 1000px) {
        font-size:14px
  };
  @media screen and (max-width: 1000px) and (min-width: 700px) {
        font-size:12px
  };
  @media screen and (max-width: 700px) and (min-width: 500px) {
        font-size:10px
  };
  @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size:8px
  };
`;

export const Overview = styled.h2`
  color: ${(props) => props.theme.white};
  font-size: 16px;
  font-weight: 300;
`;

export const Date = styled.h2`
  color: ${(props) => props.theme.lightPurple};
  font-weight: 500;
  font-size: 16px;
`;

export const Button = styled.div`
  border-radius: 5px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.lightPurple};
  width: fit-content;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 2px;
  padding: 5px 10px;
  transition: all .3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.purple};
    cursor: default;
  }
`;

export const ButtonText = styled.h2`
  position: relative;
  top: 2px;
  font-weight: 500;
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
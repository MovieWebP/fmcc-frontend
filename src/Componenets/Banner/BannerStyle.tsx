import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";


export const Wrap = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    /* border: 1px solid red; */
`;
export const AllWrap = styled(Wrap)`
    /* border: 1px solid blue; */
  transition: all 0.5 ease-in-out;
    height: 400px;
transition: transform 0.5 ease-in-out;
`;

export const MainImage = styled(motion.div) < { bgPhoto: string }> `
display: flex;
justify-content: center;
align-items: center;
transition: transform 0.5;
background-image: 
linear-gradient(
  rgba(19, 16, 16, 0.3),
  rgba(19, 16, 16, 0.3),
      #181818
), 
url(${(props) => props.bgPhoto});
background-size: cover;
width: 100%;
height: 100%;
resize: both;
`;

export const BannerImage = styled.div< { bgPhoto: string }>`
border-radius: 10px;
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
`;
export const BannerWrap = styled.div`
position: absolute;
bottom: 20px;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 10px;
padding: 0 10px;
padding-bottom: 5px;
width: 80%;
max-width: 600px;
margin-bottom: 10px;
`;

export const TitleDiv = styled.div`
display: flex;
width: fit-content;
align-items: center;
`;

export const Title = styled.h3`
color: ${(props) => props.theme.white};
font-weight: 500;
font-size: 28px;
margin-bottom: 3px;
`;
export const Overview = styled.h2`
color: ${(props) => props.theme.white};
font-weight: 300;
font-size: 16px;
/* width: 300px; */
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
  `

export const RightArrow = styled(ArrowBox)`
  `;
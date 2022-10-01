import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderWrap = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
    min-height: 300px;
  max-height: 400px;
`;

export const Wrap = styled.div`
    min-height: 300px;
    border: 1px solid green;
  position: relative;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1600px;
  overflow: hidden;
`;

export const Title = styled.h1`
    text-align: left;
    margin-left: 40px;
    font-size: 20px;
    font-weight: 500;
`;

export const Slider = styled(motion.div)`
    padding: 0 30px;
  padding-top: 50px;
  justify-content: center;  
  flex-wrap: wrap;
  display: grid; 
  grid-template-columns: repeat(6, 1fr); 
  position: absolute;
  margin-top: 10px;
  width: 100%;
`;

export const IconLeft = styled.span`
    /* border: 1px solid red; */
    width: fit-content;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const IconRight = styled(IconLeft)`
    /* border: 1px solid blue; */
    width: fit-content;
    right: 0;
`;

export const Movie = styled(motion.div)`
    width: fit-content;
    margin: 0;
    padding: 0;
    /* border: 5px solid green; */
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        max-width: 60%;
        border-radius: 10px;
    }
`;
import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderWrap = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
`;

export const Wrap = styled.div`
    /* border: 1px solid blue; */
    /* height: fit-content; */
    width: 100%;
    max-width: 2000px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: left;
    
`;

export const Title = styled.h1`
    text-align: left;
    margin-left: 40px;
    font-size: 20px;
    font-weight: 500;
`;

export const Slider = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 2000px;
    height: 100%;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    /* border: 1px solid red; */
`;

export const IconLeft = styled.span``;

export const IconRight = styled(IconLeft)``;

export const Movie = styled(motion.div)`
    width: fit-content;
    margin: 0;
    padding: 0;
    border: 5px solid green;
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
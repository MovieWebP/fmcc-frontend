import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderWrap = styled.div`   
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    height: 400px;
    ::-webkit-scrollbar{
        display: none;
    }
    scrollbar-width:none;
`;

export const Wrap = styled.div`
    height: 100%;
    position: relative;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1600px;
    overflow: hidden;
    ::-webkit-scrollbar{
          display: none;
      }
    scrollbar-width:none;
`;

export const Title = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.lightPurple};
    height: fit-content;
    width: 90%;
    color: ${(props) => props.theme.lightPurple};
    text-align: left;
    font-size: 20px;
    font-weight: 500;
`;

export const Slider = styled(motion.div)`
    padding: 0 30px;
    padding-top: 50px;
    justify-content: center;  
    align-items: baseline;
    flex-wrap: wrap;
    display: grid; 
    grid-template-columns: repeat(6, 1fr); 
    position: absolute;
    margin-top: 10px;
    width: 100%;
`;

export const IconLeft = styled.span`
    height: 80%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 50px;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    opacity: 0.3;
    transition: opacity 0.2s ease-in-out;
    &:hover{
        opacity: 1;
    }
`;

export const IconRight = styled.span`
    height: 80%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    bottom: 50px;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    opacity: 0.3;
    transition: opacity 0.2s ease-in-out;
    &:hover{
        opacity: 1;
    }
`;

export const Movie = styled.div`
    width: fit-content;
    margin: 0;
    padding: 0;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MovieImage = styled.img`
    width: 100%;
    max-width: 60%;
    border-radius: 10px;
`;

export const MovieTitle = styled(motion.div)`   
    width: 55%;
    text-align: left;
    color: ${(props) => props.theme.white};
    margin-top: 10px;
    font-weight: 500;
    transition: all 0.2s ease;
    &:hover{
        text-decoration: underline ${(props) => props.theme.white};
    }
    cursor: default;
`
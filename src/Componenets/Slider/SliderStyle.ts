import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderWrap = styled.div`   
    width: 100rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    height: 26rem;
    ::-webkit-scrollbar{
        display: none;
    }
    scrollbar-width:none;
    @media screen and (min-width: 1500px) {
        /* width: 70rem; */
    };
    @media screen and (max-width: 1500px) and (min-width: 1000px) {
        width: 80rem;
    };
    @media screen and (max-width: 1000px) and (min-width: 700px) {
        width: 50rem;
    };
    @media screen and (max-width: 700px) and (min-width: 500px) {
        font-size: 10px;
    };

@media screen and (max-width: 500px) and (min-width: 300px) {
    font-size: 8px;
};
`;

export const Wrap = styled.div`
    height: 100%;
    position: relative;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 95%;
    overflow: hidden;
    ::-webkit-scrollbar{
          display: none;
      }
    scrollbar-width:none;
    border: 1px solid red;
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
    overflow: hidden;
    width:100%;
`;

export const IconDiv = styled.div`
    display: flex;
    width: 4rem;
    overflow: hidden;
    position: absolute;
    left: 0;
    height: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
`;

export const IconLeft = styled.span`
    border: 1px solid red;
    position: relative;
    bottom: 1.1rem;
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
    @media screen and (max-width: 1000px) and (min-width: 700px) {
        position: relative;
        bottom: .5rem;
    };
    @media screen and (max-width: 700px) and (min-width: 500px) {
        position: relative;
        bottom: .5rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        position: relative;
        top: 1rem;
    };
`;

export const IconRight = styled.span`
    height: 100%;
    border: 1px solid blue;
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
    overflow: hidden;
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
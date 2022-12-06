import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderWrap = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    border: 1px solid red;
    height: 30rem;
`;

export const TitleWrap = styled.div`
    border: 1px solid white;
    align-items: flex-end;
`;

export const Title = styled.h1`
    display: flex;
    justify-content: flex-end;
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93vw;
    height: 25rem;
    border: 1px solid white;
`;

export const Slider = styled(motion.div)`
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const Movie = styled.div`
    width: fit-content;
    display: inline-block;
    text-align: center;
    border: 1px solid red;
`;

export const MovieImage = styled.img`
    align-self: center;
    position: relative;
    width: 12rem;
    border-radius: .8rem;
    margin-left: 2rem;
`;

export const MovieTitle = styled.p`
    width: 70%;
`;



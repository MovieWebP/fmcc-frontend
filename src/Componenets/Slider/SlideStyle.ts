import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderWrap = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    height: 30rem;
`;

export const TitleWrap = styled.div`
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
`;

export const Slider = styled.div`
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const Movie = styled.div`
    width: fit-content;
    word-wrap: normal;
    text-align: center;
    display: flex;
`;

export const MovieImage = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 10rem;
    border-radius: .8rem;
`;

export const MovieTitleWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

export const MovieTitle = styled.p`
    width: 60%;
`;



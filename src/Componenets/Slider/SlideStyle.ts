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
    width: 93vw;
    height: 25rem;
    border: 1px solid white;
`;

export const Slider = styled(motion.div)`
    width: 100%;
`;

export const Movie = styled.div`
    height: 200px;
    /* border: 1px solid blue; */
`;

export const MovieImage = styled.img`
    width: 13rem;
`;

export const MovieTitle = styled.p`
`;

export const IconLeftDiv = styled.div`
`;

export const IconRightDiv = styled.div``;

export const IconLeft = styled.span`
`;


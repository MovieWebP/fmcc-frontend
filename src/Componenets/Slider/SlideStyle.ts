import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderWrap = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        height: 35rem;
    };
`;
export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 25rem;
    @media screen and (max-width: 1500px) and (min-width: 1200px) {
        width: 80%;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        height: 100%;
    };
`;

export const TitleWrap = styled.div`
    align-items: flex-end;
    width: 90%;
    margin-bottom: 10px;
    @media screen and (max-width: 1500px) and (min-width: 1200px) {
        width: 80%;
    };
`;

export const Title = styled.h3`
    display: flex;
    justify-content: flex-start;
    font-size: 1.4rem;
    border-bottom: 1px solid  ${props => props.theme.lightPurple};
    font-weight: 450;
    color: ${props => props.theme.lightPurple};
`;


export const Slider = styled(motion.div)`
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    ::-webkit-scrollbar {
        display: none;
    } 
    @media screen and (max-width: 500px) and (min-width: 300px) {
        display: flex;
        overflow: scroll;
        text-align: center;
        align-items: flex-start;
        justify-content: flex-start;
    };
`;

export const Movie = styled.div`
    width: fit-content;
    word-wrap: normal;
    text-align: center;
    display: flex;
    flex-direction: column;
    &:focus{
        outline: 0; 
    }
    margin-right: 23px;
`;


export const MovieTitleWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    @media screen and (max-width: 1500px) and (min-width: 1200px) {
        display: flex;
        justify-content: center;
    };
`;

export const MovieImage = styled.img`
    width: 11rem;
    border-radius: .8rem;
    @media screen and (max-width: 1500px) and (min-width: 1200px) {
        width: 10rem;
        margin-left: auto;
        margin-right: auto;
    };
    @media screen and (max-width: 700px) and (min-width: 500px) {
        width: 12rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 15rem;
    };
    &:focus{
        outline: 0; 
    }
`;

export const MovieTitle = styled.p`
    width: 60%;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: left;
    transition: all .3s ease;
    margin-top: 10px;
    &:hover{
        text-decoration: underline ${(props) => props.theme.white};
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.5rem;
    };
    @media screen and (max-width: 1500px) and (min-width: 1200px) {
        text-align: center;
    };
`;
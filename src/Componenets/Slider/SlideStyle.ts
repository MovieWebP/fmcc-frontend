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
    @media screen and (max-width: 500px) and (min-width: 300px) {
        height: 50rem;
    };
`;

export const TitleWrap = styled.div`
    align-items: flex-end;
    width: 90%;
`;

export const Title = styled.h1`
    display: flex;
    justify-content: flex-start;
    font-size: 1.4rem;
    border-bottom: 1px solid  ${props => props.theme.lightPurple};
    font-weight: 500;
    color: ${props => props.theme.lightPurple};
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93vw;
    height: 25rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        height: 40rem;
    };
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


export const MovieTitleWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    /* border: 1px solid red; */
`;

export const MovieImage = styled.img`
        margin-left: auto;
        margin-right: auto;
        width: 10rem;
        border-radius: .8rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 12rem;
    };
`;
export const MovieTitle = styled.p`
    width: 60%;
    font-size: 1.3rem;
    transition: all .3s ease;
    margin-top: 10px;
    &:hover{
        text-decoration: underline ${(props) => props.theme.white};
    }
`;



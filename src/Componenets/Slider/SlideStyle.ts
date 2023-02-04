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
        height: 33rem;
        margin: 3rem 0;
    };
`;
export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 25rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        height: 100%;
    };
`;

export const TitleWrap = styled.div`
    align-items: flex-end;
    width: 90%;
`;

export const Title = styled.h3`
    display: flex;
    justify-content: flex-start;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.lightPurple};
    margin-top: 1.1rem;
    @media screen and (max-width: 500px) and (min-width: 800px) {
        font-size: 1.8rem;
    };
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

export const MovieImage = styled.img`
width: 11rem;
border-radius: .8rem;
@media screen and (min-width: 1800px) {
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

export const MovieTitleWrap = styled.div`
    justify-content: flex-start;
    margin-top: 10px;
    @media screen and (min-width: 1800px) {
        display: flex;
        justify-content: center;
    };
`;

export const MovieTitle = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    text-align: left;
    display: block;
    word-break:break-all;
    overflow: hidden;  		// 을 사용해 영역을 감출 것
    text-overflow: ellipsis;  	// 로 ... 을 만들기 
    white-space: nowrap; 
    transition: all .3s ease;
    width: 11rem;
    &:hover{
        text-decoration: underline ${(props) => props.theme.white};
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.7rem;
        width: 14.5rem;
    };
`;
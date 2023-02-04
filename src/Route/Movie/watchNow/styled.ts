import styled from "styled-components";
import { MdPlayArrow } from "react-icons/md";

export const SearchSliderWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100vw;
    position: relative;
    top: 10rem;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
    justify-content: center;
`;

export const Wrap = styled.div`
    width: 90%;
    display: grid;
    
    grid-template-columns: repeat(3, 10fr); 

    /* @media screen and (max-width: 1000px) and (min-width: 700px) {
    };

    @media screen and (max-width: 700px) and (min-width: 500px) {
    };

    @media screen and (max-width: 500px) and (min-width: 300px) {    
    }; */
`

export const BoxWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const VideoWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    padding: 1rem 5px;
    background-color: #252525;
    border: 1px solid #6A6A6A;
`;

export const Image = styled.img`
    width: 25rem;
    filter: brightness(60%);
    border-radius: .5rem;
    &:focus{
        outline: 0; 
    }
`;

export const MovieTitle = styled.h3`
    font-size: 1.1rem;
    margin-top: 1rem;
    /* border: 1px solid red; */
`;

export const PlayIcon = styled(MdPlayArrow)`
    z-index: 30;
    position: relative;
    top: 45%;
    width: 3.5rem;
    height: 3.5rem;
`;
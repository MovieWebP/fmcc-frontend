import styled from "styled-components";
import { MdPlayArrow } from "react-icons/md";

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
    width: 20rem;
    filter: brightness(60%);
    border-radius: .5rem;
    &:focus{
        outline: 0; 
    }
    @media screen and (max-width: 1850px) and (min-width: 1000px) {
    width: 18rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
    width: 23rem;
    };
`;

export const MovieTitle = styled.h3`
    font-size: 1.1rem;
    margin-top: 1rem;
`;

export const PlayIcon = styled(MdPlayArrow)`
    z-index: 30;
    position: relative;
    top: 45%;
    width: 3.5rem;
    height: 3.5rem;
`;
import ReactPlayer from "react-player";
import styled from "styled-components";

export const Wrap = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 10rem;
    align-items: center;
`;

export const Title = styled.h1`
font-size: 4rem;
`;

export const VideoWrap = styled.div`
    width: 60rem;
     height: 40rem; 
     margin: 2rem;
     overflow: hidden; 
     border-radius: 1rem;
`;

export const Video = styled(ReactPlayer)`
    width: 60rem;
    height: 40rem;
`;
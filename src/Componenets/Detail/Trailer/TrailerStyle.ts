import styled from "styled-components";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    right: 0;
    left: 0;
    height: 28rem;
    top: 0;
    object-fit: contain; 
    @media screen and (max-width: 2600px) and (min-width: 2000px) {
        height: 33rem;
    };
`;

export const Player = styled(ReactPlayer)`
`;

export const VolumeDiv = styled.div`
    position: relative;
    bottom: 50px;
    z-index: 30;
    opacity: 0.5;
    margin-left: 10px;
        width: fit-content;
        svg{
            width: 30px;
            height: 30px;
        }
        &:hover{
          opacity: 1;
          transition: 0.3s ease-in-out all 0s;
          color: white;
        }
    `;

export const Volume = styled.svg`
    position: relative;
    z-index: 30;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid white;
`;
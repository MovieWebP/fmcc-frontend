import styled from "styled-components";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    right: 0;
    left: 0;
    height: 28rem;
    background-color: transparent;
    top: 0;
    object-fit: contain; 
`;

export const Player = styled(ReactPlayer)`
    border-radius: "10px";
`;

export const VolumeDiv = styled.div`
    position: absolute;
    left: 0;
    bottom: 3px;
    opacity: 0.5;
    z-index: 30;
    margin-left: 10px;
        width: fit-content;
        svg{
            width: 30px;
            height: 30px;
        }
        &:hover{
          opacity: 1;
          transition: opacity 0.3s  ease-in-out ;
          color: white;
        }
    `;

export const Volume = styled.svg`
    position: relative;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid white;
`;

export const ModalTitle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
`;
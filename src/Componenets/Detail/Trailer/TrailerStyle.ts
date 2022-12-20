import styled from "styled-components";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    right: 0;
    left: 0;
    height: 400px;
    top: 0;
    object-fit: contain; 
`;

export const Player = styled(ReactPlayer)`
`;

export const VolumDiv = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
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
          transition: 0.3s ease-in-out all 0s;
          color: white;
        }
    `;

export const Volum = styled.svg`
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
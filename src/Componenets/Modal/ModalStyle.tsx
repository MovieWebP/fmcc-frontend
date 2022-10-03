import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled.div < { bgPhoto: string }> `
 background-image: linear-gradient(
  rgba(19, 16, 16, 0.5),
  rgba(19, 16, 16, 0.5),
      #181818
), url(${(props) => props.bgPhoto});
    border: 1px solid white;
    background-size: cover;
    background-position: center;
    background-attachment: fixed; 
    background-color: rgba(0, 0, 0, 0.7);
    /* position: fixed; */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -20;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
`;

export const ModalContianerWrap = styled.div`   
    border: 1px solid white;
    position: relative;
    top: 100px;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    /* flex-wrap: wrap;  */
    width: 100%;
    /* max-width: 2000px; */
    height: fit-content;
    align-items: center;
`;

export const ModalContianer = styled.div`   
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    min-width: fit-content;
    background-color: rgba(0, 0, 0, 0.3);
    height: fit-content;
    padding: 20px;
`;

export const ModalImage = styled.img`
    width: 200px;
    height: 280px;
    border-radius: 10px;
`

export const ModalInfo = styled.div`
    /* width: fit-content; */
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 20vw;
    /* max-width: 300px; */
`;

export const InfoTitle = styled.span`
    width: fit-content;
    height: fit-content;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: rgba(0, 0, 0, 0.35) 5px 5px 5px;
`;

export const InfoDate = styled.span`
    width: fit-content;
    height: fit-content;
    font-size: 16px;
    font-weight: 350;
    color: ${(props) => props.theme.lightPurple};
`;

export const Genres = styled.span`
    width: fit-content;
    height: fit-content;
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
`;

export const Genre = styled(Genres)`  
`;

export const ModalClips = styled.div < { bgPhoto: string } >`
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    width: 450px;
    height: 300px;
    border-radius: 10px;
`;

export const Video = styled.div`
    overflow: hidden;
    border-radius: 10px;
`;

export const ModalContainers = styled(ModalContianer)`
    flex-direction: column; 
    width: 30%;
`;

export const OverviewTitle = styled.h1`
color: ${(props) => props.theme.lightPurple};
font-size: 28px;
font-weight: 700;
    margin-bottom: 20px;
`;

export const InfoOverview = styled.span`
    width: 100%;
    max-width: 200px;
`;
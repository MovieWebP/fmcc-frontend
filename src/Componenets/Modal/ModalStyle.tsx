import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalWrap = styled(motion.div)`
    position: fixed;
    z-index: 10; 
`;

export const Wrap = styled.div < { bgPhoto: string }> `
 background-image: linear-gradient(
  rgba(19, 16, 16, 0.5),
  rgba(19, 16, 16, 0.5),
      #181818
), url(${(props) => props.bgPhoto});
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ModalContianerWrap = styled.div`
    position: relative;
    top: 100px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 90%;
    height: fit-content;
    align-items: center;
`;

export const ModalContianer = styled.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.3);
    height: fit-content;
    padding: 20px;
`;

export const ModalImage = styled.image < { bgPhoto: string } > `
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    width: 200px;
    height: 280px;
    border-radius: 10px;
`

export const ModalInfo = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 400px;
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

export const InfoGenre = styled.div`
    width: fit-content;
    height: fit-content;
`;

export const Genres = styled.span`
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
`;

export const OverviewTitle = styled.h1`
color: ${(props) => props.theme.lightPurple};
font-size: 28px;
font-weight: 700;
    margin-bottom: 20px;
`;

export const InfoOverview = styled.span`
width: 1000px;
max-width: 620px;
`;
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled.div < { bgPhoto: string }> `
 background-image: linear-gradient(
  rgba(19, 16, 16, 0.5),
  rgba(19, 16, 16, 0.5),
      #181818
), url(${(props) => props.bgPhoto});
    background-size: cover;
    background-position: center;
    background-attachment: fixed; 
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -20;
    padding: 100px 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    align-items: center;
`;

export const ModalContianerWrap = styled.div`   
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    width: 100%;
    max-width: 80vw;
    height: fit-content;
    align-items: center;
    margin-bottom: 20px;
`;

export const ModalContianer = styled.div`   
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const ModalImage = styled.img`
    width: 200px;
    height: 280px;
    border-radius: 10px;
`

export const ModalInfo = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 20vw;
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
    margin-left: 10px;
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

export const InfoOverview = styled.div`
    width: 30vw;
    max-width: 600px;
    min-width: 300px;
    margin-bottom: 10px;
`;

export const InfoName = styled.span`
    opacity: 0.7;
`;

export const InfoMovieName = styled.span`
    font-weight: 400;
`;


export const RecommendWrap = styled.div`
    display: flex;
    width: 500px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

export const RecommendImg = styled.img` 
    align-self: center;
    width: 180px;
    height: 280px;
    border-radius: 10px;
`;

export const RecommendSlider = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`;

export const RecommendTitle = styled.span`
    width: 80%;
    text-align: center;
    color: ${(props) => props.theme.white};
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    transition: all 0.2s ease;
    &:hover{
        text-decoration: underline ${(props) => props.theme.white};
    }
`;
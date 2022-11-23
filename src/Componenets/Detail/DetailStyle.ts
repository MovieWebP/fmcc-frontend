import styled from "styled-components";
// import { motion } from "framer-motion";

export const Wrap = styled.div`
    z-index: -20;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    align-items: center;
    position: absolute;
`;

export const WrapImage = styled.div < { bgPhoto: string }> `
background-image: linear-gradient(
    rgba(19, 16, 16, 0.5),
    rgba(19, 16, 16, 0.5),
    #181818
    ), url(${(props) => props.bgPhoto});
background-size: cover;
background-position: center;
background-attachment: fixed; 
width: 100%;
height: 110%;
filter: blur(4px);
position: absolute;
`;

export const ModalContianerWrap = styled.div`   
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    position: relative;
    top: 100px;
    width: 100vw;
    max-width: 75vw;
    flex-wrap: wrap;
    height: fit-content;
    align-items: flex-start;
    margin-bottom: 20px;
`;

export const ModalContianer = styled.div`   
    display: flex;
    width: fit-content;
    justify-content: space-between;
    padding: 20px;
`;

export const ModalContainers = styled(ModalContianer)`
    flex-direction: column; 
`;

export const CopyContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const InfoModalContainer = styled.div`
    /* padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 20vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; // flex-wrap: wrap 해석: flex item이 한 줄에 다 들어가지 않을 때, 다음 줄로 넘어가도록 함
    white-space: normal; // white-space: normal 해석: 공백을 무시하고, 모든 공백을 하나의 공백으로 처리
    border: 1px solid red; */
    /* padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 0px; */
    width: 450px;
    /* border: 1px solid red; */
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
    width: 18vw;
    height: fit-content;
`;

export const InfoTitle = styled.span`
    width: fit-content;
    height: fit-content;
    color: ${(props) => props.theme.white};
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
    color: ${(props) => props.theme.white};
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


export const OverviewTitle = styled.h1`
    color: ${(props) => props.theme.lightPurple};
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const InfoOverview = styled.div`
    width: 30vw;
    max-width: 600px;
    color: ${(props) => props.theme.white};
    min-width: 100px;
    margin-bottom: 10px;
`;

export const Overview = styled.div`
    margin-bottom: 10px;
`;

export const InfoName = styled.span`
    opacity: 0.7;
`;

export const InfoMovieName = styled.span`
    font-weight: 400;
    color: ${(props) => props.theme.white};
`;


export const RecommendWrap = styled.div`
    display: flex;
    max-width: 30vw{
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;
    };
    display: grid;
    grid-template-columns: repeat(2, 1fr); // grid-template-columns: repeat(2, 1fr) 해석: 2개의 열을 만들고, 각 열의 너비는 1fr
    grid-gap: 4vw;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 20px;
`;

export const RecommendImg = styled.img` 
    align-self: center;
    width: 180px;
    height: 280px;
    border-radius: 10px;
`;

export const RecommendSlider = styled.div`
    display: flex;
    height: fit-content;
    width:  180px;
    overflow: hidden;
    margin: 0;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: baseline;
    padding: 10px 0;
`;

export const RecommendTitle = styled.span`
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.white};
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.white};
    transition: all 0.2s ease;
    &:hover{
        text-decoration: underline ${(props) => props.theme.white};
        cursor: default;
    }
`;
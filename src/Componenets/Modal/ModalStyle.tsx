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
    border: 1px solid red;
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
    padding: 0 20px;
`;

export const ModalContianer = styled.div`
    border: 3px solid white;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 100px;
    width: fit-content;
    height: fit-content;
    /* width: 100%;
    height: 100%; */
`;

export const ModalImage = styled.image < { bgPhoto: string } > `
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    width: 200px;
    height: 280px;
    border-radius: 10px;
`

export const ModalInfo = styled.div`
    border: 1px solid red;
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

export const Genres = styled.span``;

export const Genre = styled.span`  
`;
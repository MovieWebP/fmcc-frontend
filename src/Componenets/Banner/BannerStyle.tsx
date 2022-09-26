import styled, { keyframes } from "styled-components";


export const Wrap = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px solid red;
`;

export const AllWrap = styled(Wrap)`
    border: 1px solid blue;
    /* width: 1200px; */
    height: 400px;
`;

export const MainImage = styled.div < { bgPhoto: string }> `
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
        rgba(19, 16, 16, 0.3),
      rgba(19, 16, 16, 0.3),
      #181818
    ) ,url(${(props) => props.bgPhoto});
    background-size: cover;
    width: 100%;
    height: 100%;
    resize: both;
    /* animation: identifier 3s linear infinite;
    @keyframes identifier { 
        0%,
		100% {
			background-image: url(${(props) => props.bgPhoto[0]});
		}
		50% {
			background-image: url(${(props) => props.bgPhoto[4]});
		}
		75% {
			background-image: url(${(props) => props.bgPhoto[2]});
		}
    } */
`;

export const BannerImage = styled.div< { bgPhoto: string }>`
    z-index: 1;
    width: 650px;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 50px;
    border: 1px solid;
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
`;

export const BannerWrap = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    margin-left: 20px;
    border: 1px solid red;
    width: fit-content;
    margin-bottom: 10px;
`;


export const Title = styled.h1`
    font-weight: 700;
    font-size: 28px;
`;

export const Overview = styled.p`
    font-weight: 300;
    font-size: 16px;
    width: 300px;
`;
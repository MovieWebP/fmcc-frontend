import styled, { keyframes } from "styled-components";


export const Wrap = styled.div`
    position: relative;
    width: 100%;
    max-height: 55vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const asdf = keyframes`
`;

export const MainImage = styled.div < { bgPhoto: string }> `
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    width: 100%;
    height: 100%;
    resize: both;
    animation: identifier 3s linear infinite;
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
    }
`;

export const BannerImage = styled.div< { bgPhoto: string }>`
z-index: 1;
    width: 50%;
    height: 80%;
    display: flex;
    /* margin-top: 40px; */
    border: 1px solid;
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
`;

export const BannerWrap = styled.div`
    border: 1px solid red;
`;

export const TitleWrap = styled.div`
`;

export const Title = styled.h1`
    
`;
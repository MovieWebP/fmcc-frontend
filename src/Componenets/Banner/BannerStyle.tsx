import styled, { keyframes } from "styled-components";


export const Wrap = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const asdf = keyframes`
`;

export const MainImage = styled.div < { bgPhoto: string[] }> `
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    width: 100%;
    height: 50vh;
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

export const BannerWrap = styled.div`
    width: 100%;
    border: 1px solid;
`;

export const TitleWrap = styled.div``;

export const Title = styled.h1`
    
`;
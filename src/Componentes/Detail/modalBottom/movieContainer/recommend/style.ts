import styled from "styled-components";

export const RecommendWrap = styled.div`
    /* margin: 0 20px; */
    display: grid;
    grid-template-columns: repeat(6, 1fr); 
    grid-gap: 4rem;
    flex-wrap: wrap;
    align-items: flex-start;
    @media screen and  (max-width: 1410px) and (min-width: 1256px) {
        grid-template-columns: repeat(2, 1fr); 
    };
    @media screen and (max-width: 1255px) {
        grid-template-columns: repeat(2, 1fr); 
    };
    @media screen and (max-width: 587px) and (min-width: 300px) {
        grid-template-columns: repeat(2, 1fr); 
    };
`;


export const RecommendSlider = styled.div`
    display: flex;
    width:  10rem;
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: baseline;
    @media screen and (max-width: 555px) and (min-width: 300px) {
        width: 18rem;
        align-items: center;
        justify-content: center;
    };
`;



export const RecommendImg = styled.img` 
    align-self: center;
    width: 10rem;
    border-radius: 10px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 15rem;
    };
`;


export const RecommendTitle = styled.span`
width: 100%;
    text-align: center;
    color: ${(props) => props.theme.white};
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.white};
    &:hover{
        cursor: default;
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        margin-top: 5px;
        font-size: 1.5rem;
    };
    &:hover{
        text-decoration: underline ${(props) => props.theme.white};
    }
`;

import styled from "styled-components";

export const SearchSliderWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100vw;
    position: relative;
    top: 10rem;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
    justify-content: center;
`;

export const Wrap = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    @media screen and (max-width: 2600px) and (min-width: 2450px) {
        grid-template-columns: repeat(5, 10fr); 
    };
    @media screen and (max-width: 2450px) and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);  

    };
    @media screen and (max-width: 850px) and (min-width: 300px) {
        grid-template-columns: repeat(2, 1fr);  
    };
`
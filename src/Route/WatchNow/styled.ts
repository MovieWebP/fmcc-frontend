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
    
    grid-template-columns: repeat(3, 10fr); 
`
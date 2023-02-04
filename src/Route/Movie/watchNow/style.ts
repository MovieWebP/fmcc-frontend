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
    
    @media screen and (max-width: 1500px) and (min-width: 1000px) {
        grid-template-columns: repeat(6, 1fr);
    };

    /* @media screen and (max-width: 1000px) and (min-width: 700px) {
    };

    @media screen and (max-width: 700px) and (min-width: 500px) {
    };

    @media screen and (max-width: 500px) and (min-width: 300px) {    
    }; */

    border: 1px solid red;
`

export const BoxWrap = styled.div`
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid blue;
`;

export const Image = styled.img`
    width: 11rem;
border-radius: .8rem;
&:focus{
    outline: 0; 
}
`;
import styled from "styled-components";

export const CastWrap = styled.div`
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


export const CastSlider = styled.div`
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


export const CastImageWrap = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 15rem;
        height: 15rem;
    };
`;

export const CastImg = styled.img`
    border-radius: 10px;
    width: 100%;
    align-self: center;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 15rem;
    };
`;

export const CastTitle = styled.span`   
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
`;

export const Character = styled(CastTitle)`
    margin-top: 3px;
    color: #B2B2B2;
    font-size: .9rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        /* margin-top: 3px; */
        font-size: 1.4rem;
    };
`;


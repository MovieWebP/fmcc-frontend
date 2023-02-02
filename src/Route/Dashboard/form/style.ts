import styled from "styled-components";

export const ApiWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: .5rem;
    margin-bottom: 2rem;
`;

export const OutputForm = styled.div`
    display: flex;
    width: 400px;
    height: 27rem;
    flex-direction: column;
    border-radius: 1rem;
    border: 1px solid #323232;
    margin-right: 3rem;
    background-color: rgba(0,0,0,0.5);
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10px;
    padding-right: 13px;
    padding-left: 13px;
    margin: 0;
    overflow: scroll;
    & > h3 {
        margin-top: 10px;
        font-size: 1.3rem;
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 350px;
        height: 280px;
    };
`;


export const SliderTitle = styled.h1`
    color: ${(props) => props.theme.white};
    width: fit-content;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    border-radius: 5px;
`;

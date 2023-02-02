import styled from "styled-components";


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
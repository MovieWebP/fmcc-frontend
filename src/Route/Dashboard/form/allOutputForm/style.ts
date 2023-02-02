import styled from "styled-components";

export const GetAllOutputForm = styled.div`
    background-color: rgba(0,0,0,0.5);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10px;
    padding-left: 10px;
    margin: 0;
    overflow: scroll;
    & > h3 {
        margin-top: 10px;
        font-size: 1.3rem;
    }
    width: 50rem;
    height: 30rem;
`;

export const GetAllOutputItem = styled.h3`
    margin-left: 1rem;
`;

export const GetAllOutputObjectItem = styled.h3`
    margin-left: 2rem;
`;

export const GetAllOutputResultItem = styled.h3`
    margin-left: 4rem;
`;
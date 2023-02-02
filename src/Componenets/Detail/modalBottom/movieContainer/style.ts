import styled from "styled-components";

export const MovieContainers = styled.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    flex-direction: column;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 1410px) and (min-width: 1100px) {
        width: 32rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        margin-top: 30px;
    };
`;

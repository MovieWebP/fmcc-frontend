import styled from "styled-components";


export const ModalTop = styled.div`  
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    position: relative;
    width: 100%;
    max-width: 75%;
    flex-wrap: wrap;
    height: fit-content;
    align-items: flex-start;
    margin-top: 5rem;
    margin-bottom: 0;
    @media screen and (max-width: 2600px) and (min-width: 2350px) {
        max-width: 55%;
    };
    @media screen and (max-width: 2350px) and (min-width: 2000px) {
        max-width: 62%;
    };
    @media screen and  (max-width: 1410px) and (min-width: 1256px) {
        max-width: 70%;
    };
    @media screen and (max-width: 835px) and (min-width: 300px) {
        max-width: 90%;
    };
    @media screen and (min-width: 300px) {
        justify-content: space-between;
        margin-top: 7rem;
    };
`;

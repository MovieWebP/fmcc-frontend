import styled from "styled-components";

export const LeftContianer = styled.div`   
    display: flex;
    width: 40rem;
    padding: 20px 0;
    justify-content: space-between;
    @media screen and (max-width: 1410px) and (min-width: 1100px) {
        width: 32rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 100%;
    };
`;

export const ModalImage = styled.img`
    width: 11rem;
    /* border-radius: 10px; */
    @media screen and (max-width: 2600px) and (min-width: 2000px) {
        width: 13rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 13rem;
    };
`

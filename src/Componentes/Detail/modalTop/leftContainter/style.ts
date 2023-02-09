import styled from "styled-components";

export const LeftContianer = styled.div`   
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    flex-wrap: wrap;
    /* border: 1px solid red; */
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

import styled from "styled-components";

export const Wrap = styled.div`
    z-index: -20;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const WrapImage = styled.div < { bgPhoto: string }> `
    background-image: url(${(props) => props.bgPhoto});
    background-position: center;
    background-attachment: fixed; 
    align-self: center;
    height: 100%;
    filter: blur(14px) brightness(0.15);
    position: absolute;
    background-size: cover;
    width: 100%;
`;

export const ModalContainers = styled.div`
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

export const Doc = styled.div`
    position: relative;
    bottom: 0;
    font-weight: 400;
    font-size: .8rem;
    text-align: center;
    margin-bottom: 10px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        margin-top: 10px;
    };
`
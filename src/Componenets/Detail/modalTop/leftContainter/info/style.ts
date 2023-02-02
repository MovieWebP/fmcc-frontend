import styled from "styled-components";

export const ModalInfo = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;


export const InfoTitle = styled.span`
    width: fit-content;
    height: fit-content;
    color: ${(props) => props.theme.white};
    font-size: 2.3rem;
    font-weight: 700;
    margin-bottom: 1.3rem; 
    text-shadow: rgba(0, 0, 0, 0.35) 5px 5px 5px;
    @media screen and (max-width: 400px) and (min-width: 300px) {
        margin-bottom: 10px; 
    };
`;

export const Genres = styled.span`
    width: fit-content;
    height: fit-content;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: .85rem;
    color: ${(props) => props.theme.white};
    @media screen and (max-width: 500px) and (min-width: 300px) {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1.3rem;
    };
`;

export const InfoDate = styled.span`
    font-size: 1.1rem;
    color: ${(props) => props.theme.lightPurple};
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.5rem;
    };

`;

export const Genre = styled(Genres)`  
    margin-left: 10px;
`;



export const DummyDiv = styled.div`
    flex: 1;
`;

export const SumDiv = styled.div`  
    flex: 1;
    align-items: flex-end;
`;




export const InfoOverview = styled.div`
    color: ${(props) => props.theme.white};
    min-width: 100px;
    margin-top: 5px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.4rem;
    };
`;
import styled from "styled-components";


export const Overview = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
`;


export const InfoName = styled.h3`
    margin-right: 5px;
    font-size: .85rem;
    opacity: 0.7;
`;


export const InfoMovieName = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${(props) => props.theme.white};
`;
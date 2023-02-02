import styled from "styled-components";

export const ApiWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: .5rem;
    margin-bottom: 2rem;
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

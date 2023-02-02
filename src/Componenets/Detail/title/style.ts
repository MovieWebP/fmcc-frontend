import styled from "styled-components";

export const Title = styled.h1`
    color: ${(props) => props.theme.white};
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.3rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 30px;
    };
`;
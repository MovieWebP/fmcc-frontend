import styled from "styled-components";

export const RightContainer = styled.div`
    width: 24rem;
    padding: 20px 0;
    /* border: 1px solid red; */
`;

export const OverviewTitle = styled.h1`
    color: ${(props) => props.theme.white};
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.3rem;
    /* margin-left: 20px; */
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 30px;
    };
`;
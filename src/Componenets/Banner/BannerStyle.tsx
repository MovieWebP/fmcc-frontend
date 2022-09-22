import styled from "styled-components";


export const Wrap = styled.div`
    border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
`;

export const MainImage = styled.div < { bgPhoto: string }> `
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    /* max-width: 1200px; */
    width: 100%;
    height: 40vh;
`;

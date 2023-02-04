import styled from "styled-components";

export const ModalClips = styled.div < { bgPhoto: string } >`
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    box-shadow: 3px 10px 10px rgba(0,0,0,0.3);
    width: 100%;
    height: 28rem;
    border-radius: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 2600px) and (min-width: 2000px) {
        height: 33rem;
    };
`;

export const Video = styled.div`
    overflow: hidden;
    border-radius: 10px;
`;
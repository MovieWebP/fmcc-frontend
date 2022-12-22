import styled from "styled-components";

export const Wrap = styled.div`
    z-index: -20;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    align-items: center;
    position: absolute;
`;

export const WrapImage = styled.div < { bgPhoto: string }> `
    background-image: url(${(props) => props.bgPhoto});
    opacity: 0.3;
    background-position: center;
    background-attachment: fixed; 
    align-self: center;
    height: 100%;
    filter: blur(4px);
    position: absolute;
    background-size: cover;
    width: 100%;
`;

export const ModalContainerWrapBottom = styled.div`
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    position: relative;
    width: 100%;
    max-width: 75%;
    flex-wrap: wrap;
    height: fit-content;
    align-items: flex-start;
    margin-top: 5rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 2600px) and (min-width: 2001px) {
        max-width: 55%;
    };
    @media screen and (max-width: 835px) and (min-width: 500px) {
        width: 100%;
        justify-content: center;
        max-width: 90%;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        justify-content: center;
        max-width: 90%;
    };
`;

export const ModalContainerWrap = styled(ModalContainerWrapBottom)`  
    margin-bottom: 0;
    @media screen and (max-width: 835px) and (min-width: 300px) {
        justify-content: space-between;
        margin-top: 7rem;
    };
`;

export const ModalContainer = styled.div`   
    display: flex;
    width: 40rem;
    padding: 20px 0;
    justify-content: space-between;
    @media screen and (max-width: 1500px) and (min-width: 1100px) {
        width: 35rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 100%;
    };
`;

export const ModalContainers = styled(ModalContainer)`
    width: fit-content;
    flex-direction: column;
    padding: 0;
    margin-top: 3rem;
    @media screen and (max-width: 835px) and (min-width: 401px) {
        padding: 4px 3rem;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.5);
    };
    @media screen and (max-width: 400px) and (min-width: 300px) {
        margin-top: 3rem;
    };
    /* 835 */
`;

export const CopyContainer = styled.div`
    padding: 4px 0;
    border-radius: 10px;
    @media screen and (max-width: 835px) and (min-width: 401px) {
        margin-top: 5rem;
        padding: 4px 3rem;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.5);
    };
    @media screen and (max-width: 400px) and (min-width: 300px) {
        margin-top: 5rem;
    };
`;

export const InfoModalContainer = styled.div`
    width: 24rem;
    padding: 20px 0;
    /* border: 1px solid red; */
`;

export const ModalImage = styled.img`
    width: 11rem;
    border-radius: 10px;
    @media screen and (max-width: 2600px) and (min-width: 2000px) {
        width: 13rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 13rem;
    };
`

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

export const InfoDate = styled.span`
    font-size: 1.1rem;
    color: ${(props) => props.theme.lightPurple};
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.5rem;
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

export const DummyDiv = styled.div`
    flex: 1;
`;

export const SumDiv = styled.div`  
    flex: 1;
    align-items: flex-end;
`;

export const Genre = styled(Genres)`  
    margin-left: 10px;
`;

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


export const InfoOverview = styled.div`
    color: ${(props) => props.theme.white};
    min-width: 100px;
    margin-top: 5px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.4rem;
    };
`;

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


export const RecommendWrap = styled.div`
    /* margin: 0 20px; */
    display: grid;
    grid-template-columns: repeat(6, 1fr); 
    grid-gap: 4rem;
    flex-wrap: wrap;
    align-items: flex-start;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        margin-bottom: 20px;
    };
`;

export const RecommendSlider = styled.div`
    display: flex;
    width:  10rem;
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: baseline;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 18rem;
    };
`;

export const RecommendImg = styled.img` 
    align-self: center;
    width: 10rem;
    border-radius: 10px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 15rem;
    };
`;

export const CastImageWrap = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

export const CastImg = styled(RecommendImg)`
    width: 100%;
`;

export const CastTitle = styled.span`   
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.white};
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.white};
    &:hover{
        cursor: default;
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        margin-top: 5px;
        font-size: 1.3rem;
    };
`;

export const RecommendTitle = styled(CastTitle)`
    &:hover{
        text-decoration: underline ${(props) => props.theme.white};
    }
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
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
    background-image: linear-gradient(
        rgba(17,17,17, 0.5),
        rgba(17,17,17, 0.5),
        #181818
        ), url(${(props) => props.bgPhoto});
    background-position: center;
    background-attachment: fixed; 
    height: 100%;
    filter: blur(4px);
    position: absolute;
    background-size: cover;
    width: 100%;
`;

export const ModalContainerWrap = styled.div`   
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
    @media screen and (max-width: 2600px) and (min-width: 2000px) {
        max-width: 55%;
    };
`;

export const ModalContainer = styled.div`   
    display: flex;
    width: fit-content;
    justify-content: space-between;
    padding: 20px;
`;

export const ModalContainers = styled(ModalContainer)`
    flex-direction: column; 
`;

export const CopyContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const InfoModalContainer = styled.div`
    width: 450px;
    padding: 20px;
`;

export const ModalImage = styled.img`
    width: 200px;
    height: 280px;
    border-radius: 10px;
`

export const ModalInfo = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 18vw;
    overflow: scroll;
`;

export const InfoTitle = styled.span`
    width: fit-content;
    height: fit-content;
    color: ${(props) => props.theme.white};
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: rgba(0, 0, 0, 0.35) 5px 5px 5px;
`;

export const InfoDate = styled.span`
    width: fit-content;
    height: fit-content;
    font-size: 16px;
    font-weight: 350;
    color: ${(props) => props.theme.lightPurple};
`;

export const Genres = styled.span`
    width: fit-content;
    height: fit-content;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.white};
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
    margin-left: 10px;
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
    color: ${(props) => props.theme.lightPurple};
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
`;


export const InfoOverview = styled.div`
    color: ${(props) => props.theme.white};
    min-width: 100px;
    margin-top: 5px;
`;

export const Overview = styled.div`
    margin-bottom: 10px;
`;

export const InfoName = styled.span`
    opacity: 0.7;
`;

export const InfoMovieName = styled.span`
    font-weight: 400;
    color: ${(props) => props.theme.white};
`;


export const RecommendWrap = styled.div`
    display: flex;
    max-width: 30vw{
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;
    };
    display: grid;
    grid-template-columns: repeat(2, 1fr); // grid-template-columns: repeat(2, 1fr) 해석: 2개의 열을 만들고, 각 열의 너비는 1fr
    grid-gap: 4vw;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 20px;
`;

export const RecommendImg = styled.img` 
    align-self: center;
    width: 180px;
    height: 280px;
    border-radius: 10px;
`;

export const RecommendSlider = styled.div`
    display: flex;
    height: fit-content;
    width:  180px;
    overflow: hidden;
    margin: 0;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: baseline;
    padding: 10px 0;
`;

export const RecommendTitle = styled.span`
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.white};
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.white};
    transition: all 0.2s ease;
    &:hover{
        text-decoration: underline ${(props) => props.theme.white};
        cursor: default;
    }
`;

export const Doc = styled.div`
    position: relative;
    bottom: 0;
    font-weight: 400;
    font-size: .8rem;
    text-align: center;
    margin-bottom: 10px;
`
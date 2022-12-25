import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SliderWrap = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* overflow: hidden; */
`;

export const SearchSliderWrap = styled(SliderWrap)`
    position: relative;
    top: 10rem;
`;

export const SliderTitle = styled.h1`
    color: ${(props) => props.theme.white};
    width: fit-content;
    font-size: 2rem;
    font-weight: 600;
    /* padding: 5px 20px; */
    margin: 20px 0;
    border-radius: 5px;
`;

export const Doc = styled.div`
    position: relative;
    bottom: 0;
    font-weight: 400;
    font-size: .8rem;
    text-align: center;
    margin-bottom: 10px;
`;

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
    justify-content: center;
`;

export const Loading = styled(Title)`
    font-size: 2rem;
    margin-top: 5rem;
`;
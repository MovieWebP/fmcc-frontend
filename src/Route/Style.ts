import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SliderWrap = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const SearchSliderWrap = styled(SliderWrap)`
    position: relative;
    top: 6rem;
`;

export const Loading = styled.h1`   
    color: ${(props) => props.theme.white};
    width: fit-content;
    font-size: 2rem;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 5px;
`;

export const SliderTitle = styled(Link)`
    color: ${(props) => props.theme.white};
    width: fit-content;
    font-size: 2rem;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 5px;
    &:hover{
        color: #fafafa;
    }
`;

export const Doc = styled.div`
    position: relative;
    bottom: 10px;
    font-weight: 350;
    font-size: 1rem;
    text-align: center;
`

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
    justify-content: center;
`;
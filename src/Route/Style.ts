import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SliderWrap = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
    overflow: hidden;
`;

export const SliderTitle = styled(Link)`
    /* background-color: ${(props) => props.theme.lightPurple}; */
    color: ${(props) => props.theme.white};
    width: fit-content;
    margin-bottom: 50px;
    font-size: 2rem;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 5px;
`;

export const Doc = styled.p`
    font-weight: 350;
    font-size: .7rem;
    text-align: center;
`
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SliderWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
`;

export const SliderTitle = styled(Link)`
    /* background-color: ${(props) => props.theme.lightPurple}; */
    color: ${(props) => props.theme.white};
    width: fit-content;
    margin-bottom: 50px;
    font-size: 30px;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 5px;
`;
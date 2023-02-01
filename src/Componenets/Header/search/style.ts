import styled from "styled-components";
import Container from 'react-bootstrap/Container';

export const Menu2Wrap = styled(Container)`
    margin: 0;
    padding: 0;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px;
    padding: 0;
    width: 28vw;
    height: fit-content;
    opacity: 1;
    transition: .2s opacity;
    @media screen and (max-width: 765px){
        &:has(.show) > .searchBarWrap, 
        &:has(.collapsing) > .searchBarWrap  {
        opacity: 0;
        }
    }       
    @media screen and (min-width: 765px) {
        direction: rtl;

        & > * {
            direction: ltr;
        }
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        justify-content: flex-end;
        width: 30vw;
        margin: 0;
    };
`;

export const Search = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
`

export const Input = styled.input`
    margin: 0;
    padding: 0;
    border: 1px solid ${(props) => props.theme.navbar};
    outline: 0; 
    width: 28vw;
    font-family: Arial, Helvetica, sans-serif, "FontAwesome";
    z-index: 3;
    color: ${(props) => props.theme.white};
    font-size: 1.3rem;
    background-color: transparent;
    caret-color: auto; 
    border-radius: 3px;
    padding: .35rem;
    padding-left: 1rem;
    &::placeholder{
        color: ${(props) => props.theme.navbar};
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 38vw;
        font-size: 1.8rem;
    };
`;
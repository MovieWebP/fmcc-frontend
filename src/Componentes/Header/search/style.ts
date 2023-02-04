import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

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

export const LoginWrap = styled.div`
    width: 10vw;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
`;

export const Login = styled(Link)`
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    padding: .5rem .9rem;
    color: ${(props) => props.theme.white};
    border-radius: .5rem;
    transition: all 0.3s ease-in-out;
    font-weight: 500;
    &:hover{
        background-color: #686464;
        color: ${(props) => props.theme.white};
    }
    margin-left: 5px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.8rem;
    };
`;

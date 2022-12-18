import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdDehaze } from "react-icons/md";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = styled(Navbar)`
    margin: 0;
    padding: 0;
    padding: 5px;
    background-color: #2E2B2B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
    position: fixed;
    width: 100%;
    top: 0;
    height: fit-content;
`;

export const MenuWrap = styled(Container)`
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin: 0px 20px;
    padding: 0;
    width: fit-content;
    height: fit-content;
`;

export const NavTog = styled(Navbar.Toggle)`
    margin: 0;
    padding: 0;
    border: none;
    color: none;
    display: flex;
    justify-content: flex-start;
    &:focus{
        outline: 0;
        text-decoration: none;
        box-shadow: none;
    }
`;

export const NavBarCo = styled(Navbar.Collapse)`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    @media screen and (max-width: 765px) and (min-width: 300px) {
        border-bottom: 1px solid #fafafa;
        padding-bottom: 3px;
        margin-bottom: 10px;
        width: 90vw;
        justify-content: flex-start;
        align-self: center;
        align-items: flex-start;
        flex-direction: column;
    };
`;

export const Title = styled(Navbar.Brand)`
    text-shadow: none;
    font-weight: 800;
    margin: 0;
    padding: 0;
    padding: 0 .6rem;
    border-radius: 5px;
    text-align: center;
    align-self: center;
    justify-content: center;
    margin-right: 1.3rem;
    font-size: 1.8rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.purple};
    &:hover{
        color: ${props => props.theme.purple};
    }
    @media screen and (max-width: 765px) and (min-width: 300px) {
        display: none;
    };
`;

export const MenuItems = styled(Nav)`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 765px) and (min-width: 300px) {
        align-items: flex-start;
        justify-content: flex-start;
    };
`;

export const MatchItemStyle = styled(Nav.Link)`
    margin: 0;
    padding: 0;
    align-items: center;
    color: ${(props) => props.theme.white};
    text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
    font-weight: 700;
    transition: all .25s ease-in-out;   
    transition-delay: 0s;
    font-size: 1.3rem;
    &:hover{
        color: ${(props) => props.theme.white};
    }
    @media screen and (max-width: 700px) and (min-width: 500px) {
        font-size: 1.8rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 2.3rem;
    };
`;
export const ItemStyle = styled(MatchItemStyle)`
    color: #919191;
    &:hover{
        color: ${(props) => props.theme.white};
    }
`;


export const Menu2Wrap = styled(MenuWrap)`
    margin: 0;
    padding: 0;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px;
    padding: 0;
    width: 33vw;
    height: fit-content;
    @media screen and (max-width: 1000px) and (min-width: 700px) {
        width: fit-content;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 50vw;
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
    border: 1px solid #919191;
    outline: 0; 
    width: 28vw;
    font-family: Arial, Helvetica, sans-serif, "FontAwesome";
    z-index: 3;
    color: ${(props) => props.theme.white};
    font-size: 1.3rem;
    background-color: transparent;
    caret-color: auto; 
    border-radius: 3px;
    padding-left: .5rem;
    &::placeholder{
        color: #919191;
    }
    @media screen and (max-width: 1000px) and (min-width: 700px) {  
        width: 30vw;
        font-size: 1.5rem;
    };
    @media screen and (max-width: 700px) and (min-width: 500px) {
        width: 35vw;
        font-size: 1.6rem;
    };
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
    font-weight: 600;
    &:hover{
        background-color: #686464;
        color: #fafafa;
    }
    margin-left: 5px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.8rem;
    };
`;

export const TogIcon = styled(MdDehaze)`
    margin: 0;
    padding: 0;
    width: 30px;
    height: fit-content;
    color: #fafafa;
`;

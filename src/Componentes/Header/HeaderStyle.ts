import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdDehaze } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = styled(Navbar)`
    margin: 0;
    padding: 0;
    padding: 15px 0;
    backdrop-filter: blur(30px);
    background-color: rgba(0,0,0,0.5);
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
    width: 100%;
    max-width: 100%;
    height: fit-content;
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
`;

export const NavTog = styled(Navbar.Toggle)`
    margin: 0;
    padding: 0;
    border: none;
    color: none;
    display: flex;
    justify-content: flex-start;
    height: fit-content;
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
        padding-bottom: 3px;
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


export const TogIcon = styled(MdDehaze)`
    margin: 0;
    padding: 0;
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.white};
`;
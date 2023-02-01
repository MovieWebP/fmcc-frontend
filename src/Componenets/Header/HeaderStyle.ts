import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdDehaze } from "react-icons/md";
import { MdExpandMore } from "react-icons/md"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = styled(Navbar)`
    margin: 0;
    padding: 0;
    padding: 15px 0;
    backdrop-filter: blur(10px);
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
    /* margin-bottom: 10px; */
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

export const MenuItems = styled(Nav)`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 765px) and (min-width: 300px) {
        align-items: flex-start;
        justify-content: flex-start;
        padding: 10px 0;
    };
`;

export const MatchItemStyle = styled(Nav.Link)`
    margin: 0;
    padding: 0;
    align-items: center;
    color: ${(props) => props.theme.white};
    text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
    font-weight: 500;
    transition: all .25s ease-in-out;   
    transition-delay: 0s;
    font-size: 1.5rem;
    &:hover{
        color: ${(props) => props.theme.white};
    }
    @media screen and (max-width: 765px) and (min-width: 500px) {
        margin-bottom: 10px;
        font-size: 1.8rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        margin-bottom: 5px;
        font-size: 2.3rem;
    };
`;

export const ItemStyle = styled(MatchItemStyle)`
    color: #919191;
    margin: 0;
    padding: 0;

    &:hover{
        color: ${(props) => props.theme.white};
    }
`;

export const MovieItemDiv = styled.div`
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const MovieItemStyle = styled(ItemStyle)`
    padding:0;
    /* border: 1px solid red; */
`;

export const DropIcon = styled(MdExpandMore)`
    /* border: 1px solid blue; */
    position: relative;
    right: 10px;
    width: 1.8rem;
    height: 1.8rem;
`;

export const DropDownListContainer = styled.div`
    position: absolute;
    top: 3.5rem;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;


export const Menu2Wrap = styled(MenuWrap)`
    margin: 0;
    padding: 0;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px;
    padding: 0;
    width: 33vw;
    height: fit-content;
    opacity: 1;
    transition: .2s opacity;
    @media screen and (max-width: 765px) and (min-width: 500px) {
        justify-content: flex-end;
        width: 35vw;
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
    @media screen and (max-width: 1000px) and (min-width: 765px) {  
        width: 30vw;
        font-size: 1.5rem;
    };
    @media screen and (max-width: 765px) and (min-width: 500px) {
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
    font-weight: 500;
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
    height: 30px;
    color: #fafafa;
`;

export const NavDrop = styled(NavDropdown)`
    color: white;
    margin: 0;
    padding: 0;
    & > a {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
    }
    #basic-nav-dropdown{
        color: #919191;
        &:hover{
            color: #fafafa;
        }
    }

    & > div {
    }
    .dropdown-menu{
    backdrop-filter: blur(10px);
        background-color: rgba(0,0,0,0.5);
    }
`;

export const NavItem = styled(NavDropdown.Item)`
    font-size: 1.3rem;
    color: #919191;
        z-index: 39;
    &:hover{
        color: #fafafa;
        background-color: transparent;
    }
`;
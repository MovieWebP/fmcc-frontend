// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import styled from "styled-components";

// export const Nav = styled(motion.nav)`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     z-index: 100;
//     box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
//     position: fixed;
//     width: 100%;
//     top: 0;
// `;

// export const MenuWrap = styled.div`
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     margin: 0px 20px;
//     width: 30vw;
// `;

// export const MenuItems = styled.ul`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     list-style: none;
// `;

// export const MenuItem = styled.li`
//     margin-right: 2rem;
// `;

// export const Title = styled.h1`
//     text-shadow: none;
//     font-weight: 800;
//     margin: 10px 0;
//     width: 3.5rem;
//     border-radius: 5px;
//     text-align: center;
//     margin-right: 1.3rem;
//     font-size: 1.8rem;
//     border-radius: 5px;
//     background-color: ${(props) => props.theme.white};
//     color: ${(props) => props.theme.purple};
//     @media screen and (max-width: 500px) and (min-width: 300px) {
//         border-radius: 2px;
//         width: 2.5rem;
//         font-size: 1.3rem;
//         margin-right: 1.5rem;
//         font-weight: 500;
//     };
// `;

// export const LinkStyle = styled(Link)`
//     align-items: center;
//     color: #919191;
//     text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
//     font-weight: 700;
//     transition: all .25s ease-in-out;   
//     transition-delay: 0s;
//     &:hover{
//         color: ${(props) => props.theme.white};
//     }
//     text-decoration: none;
//     font-size: 1.3rem;
//     @media screen and (max-width: 500px) and (min-width: 300px) {
//         font-weight: 500;
//     };
// `;

// export const Match = styled(Link)`
//     align-items: center;
//     color: ${(props) => props.theme.white};
//     text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
//     font-weight: 700;
//     transition: all .25s ease-in-out;   
//     transition-delay: 0s;
//     font-size: 1.3rem;
// `;


import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export const NavBar = styled(Navbar)`
    background-color: #2E2B2B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
    position: fixed;
    width: 100%;
    top: 0;
`;

export const MenuWrap = styled(Container)`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin: 0px 20px;
    padding: 0;
    border: 1px solid blue;
    width: fit-content;
    height: fit-content;
`;

export const NavTog = styled(Navbar.Toggle)`
    margin: 0;
    position: absolute;
    left: 100px;
    top: 5px;
`;

export const NavBarCo = styled(Navbar.Collapse)`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    /* position: absolute;
    right: 0;
    left: 0px;
    top: 0; */
    @media screen and (max-width: 1000px) and (min-width: 300px) {
        border-bottom: 1px solid #fafafa;
        padding-bottom: 3px;
        margin-bottom: 10px;
        width: 90vw;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    };
`;

export const Title = styled(Navbar.Brand)`
    text-shadow: none;
    font-weight: 800;
    margin: 0;
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
    @media screen and (max-width: 700px) and (min-width: 300px) {
        display: none;
    };
`;

export const MenuItems = styled(Nav)`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1000px) and (min-width: 300px) {
        align-items: flex-start;
        justify-content: flex-start;
    };
`;

export const ItemStyle = styled(Nav.Link)`
    color: #919191;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
    font-weight: 700;
    margin: 0;
    padding: 0;
    transition: all .25s ease-in-out;   
    transition-delay: 0s;
    &:hover{
        color: ${(props) => props.theme.white};
    }
    text-decoration: none;
    font-size: 1.3rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-weight: 500;
    };
`;

export const MatchItemStyle = styled(Nav.Link)`
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
`;

export const Menu2Wrap = styled(MenuWrap)`
    @media screen and (max-width: 1000px) and (min-width: 300px) {
        width: fit-content;
    };
`;

export const Search = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* border: 1px solid red; */
    padding: 0;
    margin: 0;
    svg{
        height: 25px;
    }
`

export const Input = styled.input`
    border: 1px solid #919191;
    outline: 0; 
    width: 20vw;
    font-family: Arial, Helvetica, sans-serif, "FontAwesome";
    /* padding-left: 2rem; */
    /* position: relative;
    right: 10px; */
    z-index: 3;
    color: ${(props) => props.theme.white};
    font-size: 1.3rem;
    background-color: transparent;
    caret-color: auto; 
    border-radius: 3px;
    &::placeholder{
        color: #919191;
    }
    @media screen and (max-width: 1000px) and (min-width: 300px) {
        padding-left: .3rem;
    };
    
`;

export const LoginWrap = styled.div`
    width: 10vw;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
    /* @media screen and (max-width: 1000px) and (min-width: 300px) {
        margin-left: 5px;
    }; */
`;

export const Login = styled(Link)`
    text-decoration: none;
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
    @media screen and (max-width: 1000px) and (min-width: 300px) {
        font-weight: 500;
    };
`;
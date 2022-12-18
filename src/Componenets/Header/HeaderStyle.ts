import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// export const FalNav = styled.nav`
//     background-color: #2E2B2B;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     z-index: 100;
//     box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
//     position: fixed;
//     width: 100%;
//     top: 0;
// `;

// export const Nav = styled(Navbar)`
//     background-color: #2E2B2B;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     z-index: 100;
//     box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
//     position: fixed;
//     width: 100%;
//     top: 0;
//     @media screen and (max-width: 700px) and (min-width: 300px) {
//         flex-direction: column;
//         align-items: flex-start;
//         padding-bottom: 10px;
//     };
// `;

// export const FalMenuWrap = styled.div`
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     margin: 0px 20px;
//     width: 30vw;
// `;

// export const MenuWrap = styled(FalMenuWrap)`
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     margin: 0px 20px;
//     width: 30vw;
//     @media screen and (max-width: 700px) and (min-width: 300px) {
//         /* border: 1px solid red; */
//         width: 100%;
//         justify-content: center;
//         margin: 0;
//         margin-top: 4.5rem;
//     };
// `;

// export const Menu2Wrap = styled.div`
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     margin: 0px 20px;
//     width: 30vw;
//     @media screen and (max-width: 2400px) and (min-width: 1200px) {
//         width: 25vw;
//     };
// `;

// export const FalMenu2Wrap = styled(Menu2Wrap)`
//     @media screen and (max-width: 700px) and (min-width: 500px) {
//         width: 40vw;
//         margin-top: 5px;
//         margin-bottom: 5px;
//     }
//     @media screen and (max-width: 500px) and (min-width: 300px) {
//         width: 50vw;
//         margin-top: 5px;
//         margin-bottom: 5px;
//     }
// `;

// export const CopyMenuItems = styled.ul`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     list-style: none;
// `;

// export const FalMenuItems = styled(CopyMenuItems)`
//     @media screen and (max-width: 700px) and (min-width: 300px) {
//         li{
//             display: none;
//         }
//     }
// `;

// export const MenuItems = styled(CopyMenuItems)`
//     @media screen and (max-width: 700px) and (min-width: 300px) {
//         // This width is on Mobile
//         /* width: 90%; */
//         width: 86%;
//         flex-direction: column;
//         align-items: flex-start;
//         background-color: #2E2B2B;
//         border-bottom: 1px solid #fafafa;
//         margin-bottom: 10px;
//     };
// `;


// export const MenuItem = styled.li`
//     margin-right: 2rem;
//     @media screen and (max-width: 700px) and (min-width: 300px) {
//         margin-bottom: 1.5rem;
//     };
// `;

// export const MenuSpanDiv = styled.div`
//     position: absolute;
//     transition: .3s all ease-in-out;
//     top: 1.5rem;
//     left: 4rem;
//     display: none;
//     flex-direction: column;
//     justify-content: space-between;
//     width: 2.5rem;
//     height: 2rem;
//     /* border: 1px solid red; */
//     @media screen and (max-width: 700px) and (min-width: 300px) {
//         display: flex;
//         left: 3.5rem;
//     };
// `;

// export const MenuSpan = styled.span`
//     height: 3px;
//     width: 100%;
//     background-color: white;
//     border-radius: 10px;
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
//     @media screen and (max-width: 700px) and (min-width: 300px) {
//         display: none;
//     };
// `;

// export const Match = styled(Link)`
//     align-items: center;
//     color: ${(props) => props.theme.white};
//     text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
//     font-weight: 550;
//     transition: all .25s ease-in-out;   
//     transition-delay: 0s;
//     font-size: 1.3rem;
//     @media screen and (max-width: 700px) and (min-width: 500px) {
//         font-size: 1.8rem;
//         padding-top: 1.3rem;
//     };
//     @media screen and (max-width: 500px) and (min-width: 300px) {
//         font-size: 2.3rem;
//     };
// `;

// export const LinkStyle = styled(Match)`
//     color: #919191;
//     &:hover{
//         color: ${(props) => props.theme.white};
//     }
// `;


// export const Search = styled.form`
//     color: ${(props) => props.theme.white};
//     display: flex;
//     align-items: center;
//     position: relative;
//     svg{
//         height: 25px;
//     }
// `

// export const Input = styled(motion.input)`
//     border: 1px solid #919191;
//     margin-left: 5px;
//     border-radius: 3px;
//     outline: 0; 
//     width: 20vw;
//     font-family: Arial, Helvetica, sans-serif, "FontAwesome";
//     padding-left: 1rem;
//     padding-top: 0.45rem;
//     padding-bottom: 0.45rem;
//     z-index: 3;
//     color: ${(props) => props.theme.white};
//     font-size: 1.3rem;
//     background-color: transparent;
//     caret-color: auto; 
//     &::placeholder{
//         color: #919191;
//     }
//     @media screen and (max-width: 700px) and (min-width: 500px) {
//         width: 28vw;
//         font-size: 1.5rem;
//     };
//     @media screen and (max-width: 500px) and (min-width: 300px) {
//         font-size: 1.8rem;
//         width: 40vw;
//     };
// `;

// export const LoginWrap = styled.div`
//     width: 10vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-left: 5px;
//     @media screen and (max-width: 700px) and (min-width: 300px) {
//     };
// `;

// export const Login = styled(Link)`
//     text-decoration: none;
//     font-size: 1.3rem;
//     font-weight: 550;
//     padding: .5rem .9rem;
//     color: ${(props) => props.theme.white};
//     border-radius: .5rem;
//     transition: all 0.3s ease-in-out;
//     &:hover{
//         background-color: #686464;
//     }
//     @media screen and (max-width: 700px) and (min-width: 500px) {
//         font-size: 1.5rem;
//         padding: .7rem .9rem;
//     };
//     @media screen and (max-width: 500px) and (min-width: 300px) {
//         font-size: 1.8rem;
//         font-weight: 500;
//         padding: .7rem .9rem;
//     };
// `;


export const NavWrap = styled(Navbar)` 
    margin: 0;
    padding: 0;
    background-color: #2E2B2B;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    width: 100%;
    `;

export const ToggleBtn = styled(Navbar.Toggle)`
    margin: 0;
    padding: 0;
    width: 30px;
    height: 30px;
    border: 1px solid white;
    `;

export const MenuWrap = styled(Container)`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
    width: 30vw;
    border: 1px solid red;
    `;


export const Title = styled(Navbar.Brand)`
    margin: 0;
    padding: 0;
    text-shadow: none;
    margin: 10px 0;
    width: 3.5rem;
    border-radius: 5px;
    text-align: center;
    margin-right: 1.3rem;
    font-size: 1.8rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.purple};
    font-weight: 800;
    @media screen and (max-width: 700px) and (min-width: 300px) {
        display: none;
    };
`;

export const MenuItems = styled(Navbar.Collapse)`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
`;

export const HiddenNav = styled(Nav)`
    margin: 0;
    padding: 0;
    width: 90vw;
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
`;

export const Match = styled(Nav.Link)`
    margin: 0;
    padding: 0;
    margin-right: 2rem;
    align-items: center;
    color: ${(props) => props.theme.white};
    text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
    font-weight: 550;
    transition: all .25s ease-in-out;   
    transition-delay: 0s;
    font-size: 1.3rem;
    @media screen and (max-width: 700px) and (min-width: 500px) {
        font-size: 1.8rem;
        padding-top: 1.3rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 2.3rem;
    };
`;

export const LinkStyle = styled(Match)`
    color: #919191;
    &:hover{
        color: ${(props) => props.theme.white};
    }
    `;

export const Search = styled.form`
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    position: relative;
`

export const Menu2Wrap = styled(Container)` 
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0px 20px;
    width: 35vw;
    @media screen and (max-width: 1000px) and (min-width: 700px) {
        width: 40vw;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    @media screen and (max-width: 700px) and (min-width: 500px) {
        width: 47vw;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 50vw;
    }
`;

export const Input = styled.input`
    margin: 0;
    padding: 0;
    border: 1px solid #919191;
    margin-left: 5px;
    border-radius: 3px;
    outline: 0; 
    width: 28vw;
    font-family: Arial, Helvetica, sans-serif, "FontAwesome";
    padding-left: 1rem;
    padding-top: 0.45rem;
    padding-bottom: 0.45rem;
    z-index: 3;
    color: ${(props) => props.theme.white};
    font-size: 1.3rem;
    background-color: transparent;
    caret-color: auto; 
    &::placeholder{
        color: #919191;
    }
    @media screen and (max-width: 1000px) and (min-width: 700px) {
        width: 31vw;
    };
    @media screen and (max-width: 700px) and (min-width: 500px) {
        width: 35vw;
        font-size: 1.5rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.8rem;
        width: 37.5vw;
    };
`;

export const LoginWrap = styled.div`
    margin: 0;
    padding: 0;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    @media screen and (max-width: 700px) and (min-width: 300px) {
    };
`;

export const Login = styled(Link)`
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 550;
    padding: .5rem .9rem;
    color: ${(props) => props.theme.white};
    border-radius: .5rem;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #686464;
        color: #fafafa;
    }
    @media screen and (max-width: 700px) and (min-width: 500px) {
        font-size: 1.5rem;
        padding: .7rem .9rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.8rem;
        font-weight: 500;
        padding: .7rem .9rem;
    };
`;
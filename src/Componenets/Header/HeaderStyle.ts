import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
    position: fixed;
    width: 100%;
    top: 0;
`;

export const MenuWrap = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0px 20px;
    width: 30vw;
`;

export const MenuItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
`;

export const MenuItem = styled.li`
    margin-right: 2rem;
`;

export const Title = styled.h1`
    text-shadow: none;
    font-weight: 800;
    margin: 10px 0;
    width: 3.5rem;
    border-radius: 5px;
    text-align: center;
    margin-right: 1.3rem;
    font-size: 1.8rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.purple};
    @media screen and (max-width: 500px) and (min-width: 300px) {
        border-radius: 2px;
        width: 2.5rem;
        font-size: 1.3rem;
        margin-right: 1.5rem;
    };
`;

export const LinkStyle = styled(Link)`
    align-items: center;
    color: #919191;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
    font-weight: 700;
    transition: all .25s ease-in-out;   
    transition-delay: 0s;
    &:hover{
        color: ${(props) => props.theme.white};
    }
    text-decoration: none;
    font-size: 1.3rem;
`;

export const Match = styled(Link)`
    align-items: center;
    color: ${(props) => props.theme.white};
    text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
    font-weight: 700;
    transition: all .25s ease-in-out;   
    transition-delay: 0s;
    font-size: 1.3rem;
`;

export const Search = styled.form`
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    position: relative;
    svg{
        height: 25px;
    }
`

export const Input = styled(motion.input)`
    border: 1px solid #919191;
    border-radius: 50px;
    outline: 0; 
    width: 20vw;
    padding-left: 3rem;
    z-index: -1;
    color: ${(props) => props.theme.white};
    font-size: 1.3rem;
    background-color: transparent;
    caret-color: auto; 
`;

export const LoginWrap = styled.div`
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Login = styled(Link)`
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 600;
    padding: .5rem .9rem;
    color: ${(props) => props.theme.white};
    border-radius: .5rem;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #686464;
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        /* border-radius: 6px; */
    };
`;


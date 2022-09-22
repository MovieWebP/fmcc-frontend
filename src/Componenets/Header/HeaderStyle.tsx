import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    border-bottom: 1px solid #B0A8A8;
    position: fixed;
    width: 100%;
    top: 0;
`;

export const MenuWrap = styled.div`
    /* border: 1px solid white; */
    display: flex;
    /* width: 30%; */
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
`;

export const MenuItems = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`;

export const MenuItem = styled.li`
    margin-right: 50px;
`;

export const Title = styled.h1`
    text-shadow: none;
    font-size: 24px;
    font-weight: 900;
    margin: 10px 0;
    margin-right: 50px;
    padding: 0 5px;
    border-radius: 5px;
text-shadow: none;
font-size: 24px;
margin: 10px 0;
margin-right: 50px;
padding: 0 10px;
border-radius: 5px;
    background-color: #fafafa;
    color: #9486CC;
`;

export const LinkStyle = styled(Link)`
    align-items: center;
    color: #919191;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
    font-weight: 700;
    transition: all .25s ease-in-out;   
    transition-delay: 0s;
    &:hover{
        color: #fafafa;
    }
    text-decoration: none;
`;

export const Search = styled.form`
    color: white;
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
    transform-origin: right center;
    position: absolute;
    right: 65px;
    padding: 5px 10px;
    padding-left: 40px;
    z-index: -1;
    color: white;
    font-size: 16px;
    background-color: transparent;
    caret-color: auto;
`

export const Login = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    padding: 8px 15px;
    color: #fafafa;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #686464;
        /* transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2); */
    }
`;

export const navVariants = {
    top: {
        backgroundColor: '#2E2B2B'
    },
    scroll: {
        backgroundColor: '#2E2B2B'
    }
}

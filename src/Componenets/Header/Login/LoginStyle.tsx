import styled from "styled-components";
import { Link } from "react-router-dom";

export const Login_page = styled.div`
    display: flex;
    width: 380px;
    padding: 13% 0 0;
    margin-left: -190px;  
    margin: auto;
    text-align: center;
`;

export const Div_Form = styled.div`
    width: 500px;
    position: relative;
    z-index: 1;
    background: #FEE715;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    border-radius: 20px;
`;

export const Input = styled.input`
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #FFFF;
    width: 90%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 60px;
    &::placeholder {
        color: #101820;
    }
`;

export const Button = styled.button`
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #1c2c3b;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FEE715;
    font-size: 14px;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
        background: #243d57;
    }
`;

export const P = styled.p`
    margin: 15px 0 0;
    color: #101820;
    font-size: 12px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #243d57;
    &:hover{
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
        color: #31567b;
    }
`;
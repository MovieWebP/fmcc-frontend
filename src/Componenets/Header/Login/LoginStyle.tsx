import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const LoginFrom = styled.form`
   display: flex;
   width: 35vw;
    height: 45vh;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #B0A8A8;
`

export const LoginInput = styled.input`
    width: 80%;
    height: 50px;
    background-color: #575050;
    border-radius: 10px;
    border: none;
    margin-bottom: 40px;
    padding-left: 10px;
    caret-color: auto; 
    color: ${(props) => props.theme.white};
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #d1cccc;
    }
`;

export const LoginInputSecond = styled(LoginInput)`
    margin-bottom: 0;
`;

export const LoginButton = styled.button`
    margin-top: 10px;
    width: 80%;
    border-radius: 3px;
    border: none;
    padding: 10px;
    font-size: 18px;
    color: ${props => props.theme.white};
    background-color: #575050;
    transition: all 0.2s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: #797474;
    }
`;
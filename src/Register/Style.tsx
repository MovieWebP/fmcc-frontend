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
    height: 350px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid red;
    background-color: #B0A8A8;
`

export const SignUpFrom = styled(LoginFrom)`
    height: 400px;
    border: 1px solid red;
`;

export const UserDiv = styled.div`
    margin-bottom: 40px;
    height: 50px;
    width: 80%;
`;

export const Username = styled.input`
    background-color: #575050;
    border-radius: 10px;
    height: 50px;
    padding-left: 10px;
    width: 100%;
    border: none;
    caret-color: auto; 
    color: ${(props) => props.theme.white};
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #d1cccc;
    }
`;

export const Message = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;

export const PasswordDiv = styled(UserDiv)`
    margin-bottom: 0;
`;


export const Password = styled(Username)`
`;

export const CheckPassword = styled(Username)``;

export const LoginButton = styled(Link)`
    margin-top: 25px;
    text-align: center;
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

export const LinkDiv = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: ${props => props.theme.white};
`;

export const LinkStyle = styled(Link)`
    color: #575050;
    transition: all 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        color: #797474;
    }
`;
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export const Wrap = styled.div`
    height: 99vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        height: 98vh;
    };
`;

export const TopIcon = styled(MdPerson)`
    color: rgba(0,0,0,0.5);
    width: 4rem;
    height: 4rem;
`;

export const FormIConDiv = styled.div`
    background-color: #323232;
    padding: 1.5rem;
    border-radius: 50%;
    margin-bottom: 2.5rem;
`;

export const LoginFrom = styled.form`
    display: flex;
    width: 400px;
    height: 330px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: #171717;
    border: 1px solid #323232;
`;

export const SignUpFrom = styled(LoginFrom)`
    height: 400px;
`;

export const UserDiv = styled.div`
    text-align: right;
    margin-bottom: 2.5rem;
    height: 50px;
    width: 80%;
`;

export const Username = styled.input`
    background-color: rgba(0,0,0,0.5);
    border: 1px solid #323232;
    border-radius: 10px;
    height: 50px;
    padding-left: 10px;
    z-index: 7;
    width: 100%;
    caret-color: auto; 
    color: ${(props) => props.theme.white};
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #d1cccc;
    }
`;

export const UserIcon = styled(MdPerson)`
    position: relative;
    margin-right: 3px;
    bottom: 2.6rem;
    color: #fafafa;
    width: 2rem;
    height: 2rem;
`;

export const Message = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;

export const PasswordDiv = styled(UserDiv)`
    margin-bottom: 0;
`;

export const LockIcon = styled(FaLock)`
    position: relative;
    bottom: 2.4rem;
    margin-right: 6px;
    color: #fafafa;
    width: 1.6rem;
    height: 1.6rem;
`;


export const Password = styled(Username)`
`;

export const CheckPassword = styled(Username)``;

export const LoginButton = styled(Link)`
    margin-top: 1.8rem;
    text-align: center;
    width: 80%;
    border-radius: .3rem;
    border: none;
    padding: 10px;
    font-size: 1.3rem;
    font-weight: 550;
    color: ${props => props.theme.white};
    background-color: #323232;
    transition: all 0.2s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: #797474;
    }
`;

export const LinkDiv = styled.div`
    margin-top: 1.5rem;
    font-size: 14px;
    color: ${props => props.theme.white};
`;

export const LinkStyle = styled(Link)`
    transition: opacity 0.3s ease-in-out;
    color: #fafafa;
    opacity: 0.6;
    &:hover{
        cursor: pointer;
        opacity: 1;
    }
`;


export const Doc = styled.p`
    font-weight: 350;
    font-size: .7rem;
    text-align: center;
`
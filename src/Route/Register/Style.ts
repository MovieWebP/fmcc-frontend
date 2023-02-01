import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export const Wrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    @media screen and (max-width: 1500px) and (min-width: 300px) {
        height: 98%;
    };
`;

export const TopIcon = styled(MdPerson)`
    color: rgba(0,0,0,0.5);
    width: 4rem;
    height: 4rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 5rem;
        height: 5rem;
    };
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
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 350px;
        height: 280px;
    };
`;

export const SignUpFrom = styled(LoginFrom)`
    height: 400px;
`;

export const UserDiv = styled.div`
    text-align: right;
    margin-bottom: 30px;
    height: 50px;
    width: 80%;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
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
    bottom: 40px;
    z-index: 10;
    color: #fafafa;
    width: 30px;
    height: 30px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 25px;
        height: 25px;
        position: relative;
        bottom: 38px;
    };
`;

export const Message = styled.p`
    color: red;
    font-size: 12px;
    position: relative;
    bottom: 25px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        position: relative;
        bottom: 20px;
    };
`;

export const UserMessage = styled(Message)`
    bottom: 33px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        position: relative;
        bottom: 25px;
    };
`;

export const PasswordDiv = styled(UserDiv)`
    margin-bottom: 0;
`;

export const LockIcon = styled(FaLock)`
    position: relative;
    z-index: 10;
    bottom: 35px;
    margin-right: 6px;
    color: #fafafa;
    width: 23px;
    height: 23px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 18px;
        height: 18px;
        position: relative;
        bottom: 33px;
    };
`;


export const Password = styled(Username)`
`;

export const CheckPassword = styled(Username)``;

export const LoginButton = styled.button`
    margin-top: 30px;
    text-align: center;
    width: 80%;
    border-radius: .3rem;
    border: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: 550;
    color: ${props => props.theme.white};
    background-color: #323232;
    transition: all 0.2s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: #797474;
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.5rem;
    };
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
    position: absolute;
    bottom: 0;
`

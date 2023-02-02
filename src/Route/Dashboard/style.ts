import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 4.5rem;
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

export const ApiMessage = styled.p`
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

export const LinkDiv = styled.div`
    margin-top: 1.5rem;
    font-size: 14px;
    color: ${props => props.theme.white};
`;

export const LinkStyle = styled(Link)`
    &:hover{
        color: #fafafa;
        cursor: pointer;
        opacity: 1;
    }
`;


export const Doc = styled.p`
    font-weight: 350;
    font-size: .7rem;
    margin-top: 1rem;
    text-align: center;
    /* position: absolute; */
    /* bottom: 0; */
`
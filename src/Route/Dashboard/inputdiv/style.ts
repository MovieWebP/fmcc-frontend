import styled from "styled-components";

export const UserDiv = styled.div`
    text-align: right;
    margin-bottom: 30px;
    height: 50px;
    width: 80%;
    overflow: scroll;
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
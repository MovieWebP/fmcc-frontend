import styled from "styled-components";

export const ApiWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: .5rem;
    margin-bottom: 2rem;
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
    margin-right: 3rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 350px;
        height: 280px;
    };
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

export const LoginButton = styled.button`
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
        color: #fafafa;
        background-color: #797474;
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.5rem;
    };
`;

export const ApiForm = styled(LoginFrom)`
    background-color: rgba(0,0,0,0.5);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10px;
    padding-left: 10px;
    margin: 0;
    overflow: scroll;
    & > h3 {
        margin-top: 10px;
        font-size: 1.3rem;
    }
`;

export const SliderTitle = styled.h1`
    color: ${(props) => props.theme.white};
    width: fit-content;
    font-size: 2rem;
    font-weight: 600;
    margin: 20px 0;
    border-radius: 5px;
`;
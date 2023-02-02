import styled from "styled-components";


export const InputFrom = styled.form`
    display: flex;
    width: 400px;
    height: 27rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    border-radius: 1rem;
    background-color: #171717;
    border: 1px solid #323232;
    margin-right: 3rem;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 350px;
        height: 280px;
    };
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
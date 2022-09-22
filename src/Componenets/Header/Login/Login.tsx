import React from "react";
import * as S from "./LoginStyle";
import Menu from "../Header";

function Login() {
    return (
        <S.Login_page>
            <S.Div_Form>
                <form>
                    <S.Input type="text" placeholder="username" />
                    <S.Input type="password" placeholder="password" />
                    <S.StyledLink to="/"><S.Button>login</S.Button></S.StyledLink>
                    <S.P>Not registered? <S.StyledLink to="/SignUp">Create an account</S.StyledLink></S.P>
                </form>
            </S.Div_Form>
        </S.Login_page>
    )
};

export default Login;
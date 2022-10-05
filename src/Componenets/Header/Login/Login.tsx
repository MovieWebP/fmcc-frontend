import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./LoginStyle";

interface IForm {
    email: string;
    password: string;
};

function Login() {
    const { register, handleSubmit } = useForm<IForm>();
    return (
        <S.Wrap>
            <S.LoginFrom>
                <S.LoginInput
                    // {...register({ required: true, minLength: 2 })}
                    type="text" placeholder="Username" />
                <S.LoginInputSecond type="text" placeholder="Username" />
                <S.LoginButton>Login</S.LoginButton>
            </S.LoginFrom>
        </S.Wrap>
    )
};

export default Login;
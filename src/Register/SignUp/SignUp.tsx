import React from "react";
import { useForm } from "react-hook-form";
import * as S from "../Style";

interface IForm {
    email: string;
    password: string;
};

function SignUp() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<IForm>();

    const onSubmit = (data: IForm) => {
        setValue("password", "");
        setValue("email", "");
    };

    return (
        <S.Wrap>
            <S.LoginFrom onSubmit={handleSubmit(onSubmit)}>
                <S.UserDiv>
                    <S.Username {...register("email", {
                        required: "Email is required",
                        minLength: {
                            value: 5,
                            message: "Email should be longer than 5 chars"
                        }
                    })} placeholder="Email" />
                    <S.Message>{errors.email?.message}</S.Message>
                </S.UserDiv>
                <S.PasswordDiv>
                    <S.Password {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Password should be longer than 5 chars"
                        }
                    })} type="password" placeholder="Password" />
                    <S.Message>{errors.password?.message}</S.Message>
                </S.PasswordDiv>
                <S.LoginButton>Login</S.LoginButton>
                <S.LinkDiv>Not Registerd? <S.LinkStyle to="/signup">Make Account</S.LinkStyle></S.LinkDiv>
            </S.LoginFrom>
        </S.Wrap>
    )
};

export default SignUp;
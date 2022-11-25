import { useForm } from "react-hook-form";
import * as S from "../Style";

interface IForm {
    email: string;
    password: string;
    checkPassword: string;
};

function SignUp() {
    const { register, handleSubmit, formState: { errors }, setError, setValue } = useForm<IForm>();

    const onSubmit = (data: IForm) => {
        if (data.password !== data.checkPassword) {
            setError("checkPassword",
                { message: "Password is not same" },
                { shouldFocus: true });
        }
        setValue("password", "");
        setValue("email", "");
        setValue("checkPassword", "");
    };

    return (
        <S.Wrap>
            <S.SignUpFrom onSubmit={handleSubmit(onSubmit)}>
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
                <S.UserDiv>
                    <S.Password {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Password should be longer than 5 chars"
                        }
                    })} type="password" placeholder="Password" />
                    <S.Message>{errors.password?.message}</S.Message>
                </S.UserDiv>
                <S.PasswordDiv>
                    <S.Password {...register("checkPassword", {
                        required: "checkPassword is required"
                    })} type="password" placeholder="Check Password" />
                    <S.Message>{errors.checkPassword?.message}</S.Message>
                </S.PasswordDiv>
                <S.LoginButton to="/login">Sign Up</S.LoginButton>
                <S.LinkDiv>Already Registerd? <S.LinkStyle to="/login">Sign In</S.LinkStyle></S.LinkDiv>
            </S.SignUpFrom>
        </S.Wrap>
    )
};

export default SignUp;
import { Link } from "react-router-dom";
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
        <>
            <S.Wrap>
                <S.FormIConDiv>
                    <S.TopIcon />
                </S.FormIConDiv>
                <S.SignUpFrom onSubmit={handleSubmit(onSubmit)}>
                    <S.UserDiv>
                        <S.InputDiv>
                            <div>
                                <S.Username {...register("email", {
                                    required: "Email is required",
                                    minLength: {
                                        value: 5,
                                        message: "Email should be longer than 5 chars"
                                    }
                                })} placeholder="Email" />
                                <S.UserIcon />
                            </div>
                            <S.UserMessage>{errors.email?.message}</S.UserMessage>
                        </S.InputDiv>
                    </S.UserDiv>
                    <S.UserDiv>
                        <S.InputDiv>
                            <div>
                                <S.Password {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 5,
                                        message: "Password should be longer than 5 chars"
                                    }
                                })} type="password" placeholder="Password" />
                                <S.LockIcon />
                            </div>
                            <S.Message>{errors.password?.message}</S.Message>
                        </S.InputDiv>
                    </S.UserDiv>
                    <S.PasswordDiv>
                        <S.InputDiv>
                            <div>
                                <S.Password {...register("checkPassword", {
                                    required: "checkPassword is required"
                                })} type="password" placeholder="Check Password" />
                                <S.LockIcon />
                            </div>
                            <S.Message>{errors.checkPassword?.message}</S.Message>
                        </S.InputDiv>
                    </S.PasswordDiv>
                    <S.LoginButton><Link to="/login">Sign Up</Link></S.LoginButton>
                    <S.LinkDiv>Already Registerd? <S.LinkStyle to="/login">Sign In</S.LinkStyle></S.LinkDiv>
                </S.SignUpFrom>
            </S.Wrap >
            <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>
        </>
    )
};

export default SignUp;
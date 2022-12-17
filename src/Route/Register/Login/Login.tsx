import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import * as S from "../Style";

interface IForm {
    errors: {
        email: {
            message: string;
        };
    };
    email: string;
    password: string;
};

function Login() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<IForm>();
    const navigate = useNavigate();

    const onValid = (data: IForm) => {
        console.log('email', data.email);
        setValue("password", "");
        setValue("email", "");
    };

    return (
        <>
            <S.Wrap>
                <S.FormIConDiv>
                    <S.TopIcon />
                </S.FormIConDiv>
                <S.LoginFrom onSubmit={handleSubmit(onValid)}>
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
                    <S.PasswordDiv>
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
                    </S.PasswordDiv>
                    <S.LoginButton><Link to="/">Login</Link></S.LoginButton>
                    <S.LinkDiv>Not Registerd? <S.LinkStyle to="/signup">Make Account</S.LinkStyle></S.LinkDiv>
                </S.LoginFrom>
                <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>
            </S.Wrap>
        </>
    )
};

export default Login;
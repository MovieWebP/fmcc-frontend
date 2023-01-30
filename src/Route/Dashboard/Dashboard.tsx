import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import * as S from "./style";

interface IForm {
    url: string;
    title: string;
    movieId: number;
};

function Dashboard() {
    const { register, handleSubmit, setValue } = useForm<IForm>({
        defaultValues: {
            url: "http://localhost:3005/video/movie",
        }
    });
    const navigate = useNavigate();

    const [movieId, setMovieId] = useState<number>(0);
    const [apiData, setApiData] = useState<any>();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let res = await axios(
                {
                    method: 'post',
                    url: 'http://127.0.0.1:3005/videos/create',
                    // data를 숫자형식으로 변환
                    data: JSON.stringify(Object.fromEntries(new FormData((e.target as HTMLFormElement)))),
                    headers: {
                        'Content-Type': 'application/json',
                        'dataType': 'json'
                    }
                }
            );
            let data = res.data;
            setApiData(data);
            console.log(data);
        } catch (err) {
            const data = JSON.stringify(Object.fromEntries(new FormData((e.target as HTMLFormElement))));
            console.log(data);
            console.log(e.target)
            console.log(err);
        }
    };

    return (
        <>
            <S.Wrap>
                <S.LoginFrom onSubmit={onSubmit}>
                    <S.UserDiv>
                        <S.InputDiv>
                            <div>
                                <S.Username {...register("url", {
                                    required: "url is required",
                                })} placeholder="url" />
                            </div>
                        </S.InputDiv>
                    </S.UserDiv>
                    <S.UserDiv>
                        <S.InputDiv>
                            <div>
                                <S.Username {...register("title", {
                                    required: "title is required",
                                })} placeholder="title" />
                            </div>
                        </S.InputDiv>
                    </S.UserDiv>
                    <S.PasswordDiv>
                        <S.InputDiv>
                            <div>
                                <S.Password {...register("movieId", {
                                    required: "movieId is required",
                                })} placeholder="movieId" />
                            </div>
                        </S.InputDiv>
                    </S.PasswordDiv>
                    <S.LoginButton type="submit">Submit</S.LoginButton>
                </S.LoginFrom>
                <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>
            </S.Wrap>

            {/* <S.Wrap>
                <form onSubmit={onSubmit}>
                    <input type="text" name="url" placeholder="url" />
                    <input type="text" name="title" placeholder="title" />
                    <input type="number"  min="0" step="1" name="movieId" placeholder="movieId" />
                    <button type="submit">Register</button>
                </form>
                {apiData ?
                    <div>
                        <p>{apiData.ok}</p>
                        <p>{apiData.video.url}</p>
                        <p>{apiData.video.movieId}</p>
                    </div>
                    : <div>not thing</div>}
            </S.Wrap> */}
        </>
    )
};

export default Dashboard;
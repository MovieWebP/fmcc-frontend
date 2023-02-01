import axios from "axios";
import React, { useState } from "react";
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
    const [message, setMessage] = useState('');

    const [movieId, setMovieId] = useState<number>(0);
    const [apiData, setApiData] = useState<any>();
    // try {
    //     let res = await axios(
    //         {
    //             method: 'post',
    //             url: 'http://127.0.0.1:3005/videos/creat',
    //             // data를 숫자형식으로 변환
    //             data: JSON.stringify(Object.fromEntries(new FormData((e.target as HTMLFormElement)))),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'dataType': 'json'
    //             }
    //         }
    //     );
    //     let data = res.data;
    //     setApiData(data);
    //     console.log(data);
    // } catch (err) {
    //     const data = Object.fromEntries(new FormData((e.target as HTMLFormElement)));
    //     console.log(data, 'data');
    //     console.log(e, 'e');
    //     console.log(e.target, 'e.target');
    //     console.log(err);
    // }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const instance = axios.create({
            baseURL: 'http://127.0.0.1:3005/videos/create',
            headers: {
                'Content-Type': 'application/json',
                'dataType': 'json'
            }
        });

        try {
            await instance.post('', {
                "url": `${Object(e.target)[0].value}`,
                "title": `${Object(e.target)[1].value}`,
                "movieId": +Object(e.target)[2].value,
            })
                .then((res) => {
                    console.log(res.data.video);
                    setApiData(res.data.video);
                })
        } catch (err) {
            console.log(err)
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
                        {/* {apiData ? <p>{apiData.movieId || apiData.error}</p>: null} */}
                    </S.PasswordDiv>
                    <S.LoginButton type="submit">Submit</S.LoginButton>
                </S.LoginFrom>
                <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>

                <S.ApiForm>
                    <h3>url: {apiData ? <p>{apiData.url}</p> : <p>null</p>}</h3>
                    <h3>title: {apiData ? <p>{apiData.title}</p> : <p>null</p>}</h3>
                    <h3>movieId: {apiData ? <p>{apiData.movieId}</p> : <p>null</p>}</h3>
                </S.ApiForm>
            </S.Wrap>
        </>
    )
};

export default Dashboard;
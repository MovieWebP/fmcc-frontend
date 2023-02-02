import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./style"

interface ApiFormProps {
    title: string;
}

interface VideoProps {
    url: string;
    title: string;
    movieId: number;
}

interface IForm {
    video: VideoProps[];
    error?: string;
};

export const ApiForm: React.FC<ApiFormProps> = ({ title }) => {
    const { register } = useForm<VideoProps>({
        defaultValues: {
            url: "http://localhost:3005/video/movie",
        }
    });

    const [apiData, setApiData] = useState<IForm>();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const instance = axios.create({
            baseURL: 'http://127.0.0.1:3005/video/create',
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
                    console.log(res.data);
                    setApiData(res.data);
                })
        } catch (err) {
            console.log(err)
        }
    };
    return (
        <>
            <S.SliderTitle>{title}</S.SliderTitle>
            <S.ApiWrap>
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
                    <S.UserDiv>
                        <S.InputDiv>
                            <div>
                                <S.Username {...register("movieId", {
                                    required: "movieId is required",
                                })} placeholder="movieId" />
                            </div>
                        </S.InputDiv>
                    </S.UserDiv>
                    <S.LoginButton type="submit">{title}</S.LoginButton>
                </S.LoginFrom>
                <S.ApiForm>
                    {apiData?.video.map((video, index) => (
                        <>
                            <h3>url: {video.url}</h3>
                            <h3>title: {video.title}</h3>
                            <h3>movieId: {video.movieId}</h3>
                        </>
                    ))}

                    <h3>error: {apiData ? <>{apiData.error}</> : null}</h3>
                </S.ApiForm>
            </S.ApiWrap >
        </>
    )
}
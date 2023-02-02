import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputDiv } from "../inputdiv";
import * as S from "./style"

interface FormProps {
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

export const Form: React.FC<FormProps> = ({ title }) => {

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
                    {title === "Create" && (
                        <>
                            <InputDiv name="url" />
                            <InputDiv name="title" />
                            <InputDiv name="movieId" />
                        </>
                    )}
                    {title === "Update" && (
                        <>
                            <InputDiv name="video id" />
                            <InputDiv name="url" />
                            <InputDiv name="title" />
                            <InputDiv name="movieId" />
                        </>
                    )}
                    {title === "Delete" || title === "Get" ? (
                        <>
                            <InputDiv name="video id" />
                        </>
                    ) : (null)}
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
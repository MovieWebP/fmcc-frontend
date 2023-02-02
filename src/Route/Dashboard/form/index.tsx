import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputDiv } from "../inputdiv";
import { AllOutputForm } from "./allOutputForm";
import * as S from "./style"

interface FormProps {
    title: string;
    baseUrl: string;
}

interface IForm {
    video: {
        id: number;
        url: string;
        title: string;
        movieId: number;
    };
    ok: boolean;
    error?: string;
};

export const Form: React.FC<FormProps> = ({ title, baseUrl }) => {

    const [apiData, setApiData] = useState<IForm>();

    const rest = (e: React.FormEvent<HTMLFormElement>, title: string) => {
        if (title === "Create") {
            return {
                "url": `${Object(e.target)[0].value}`,
                "title": `${Object(e.target)[1].value}`,
                "movieId": +Object(e.target)[2].value,
            }
        }
        else if (title === "Update") {
            return {
                "videoId": +Object(e.target)[0].value,
                "url": `${Object(e.target)[1].value}`,
                "title": `${Object(e.target)[2].value}`,
                "movieId": +Object(e.target)[3].value,
            }
        }
        else if (title === "Delete" || title === "Get") {
            return {
                "videoId": +Object(e.target)[0].value,
            }
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const instance = axios.create({
            baseURL: `${baseUrl}`,
            headers: {
                'Content-Type': 'application/json',
                'dataType': 'json'
            }
        });

        try {
            await instance.post('', rest(e, title))
                .then((res) => {
                    console.log(res.data);
                    setApiData(res.data);
                })
        } catch (err) {
            console.log(Object(e.target)[0].value)
            console.log(err)
        }
    };

    return (
        <>
            <S.SliderTitle>{title}</S.SliderTitle>
            <S.ApiWrap>
                {title !== "GetAll" ? (
                    <>
                        <S.InputFrom onSubmit={onSubmit}>
                            {title === "Create" && (
                                <>
                                    <InputDiv name="url" />
                                    <InputDiv name="title" />
                                    <InputDiv name="movieId" />
                                </>
                            )}
                            {title === "Update" && (
                                <>
                                    <InputDiv name="videoId" />
                                    <InputDiv name="url" />
                                    <InputDiv name="title" />
                                    <InputDiv name="movieId" />
                                </>
                            )}
                            {title === "Delete" || title === "Get" ? (
                                <>
                                    <InputDiv name="videoId" />
                                </>
                            ) : (null)}
                            <S.LoginButton type="submit">{title}</S.LoginButton>
                        </S.InputFrom>

                        <S.OutputForm>

                            {/* create */}
                            {apiData && (
                                <>
                                    <h3>ok: {apiData?.ok?.toString()} </h3>
                                    {apiData?.error && <h3>error: {apiData?.error} </h3>}
                                </>
                            )}
                            {apiData?.video && (
                                <>
                                    <h3>id: {apiData.video.id}</h3>
                                    <h3>url: {apiData.video.url}</h3>
                                    <h3>title: {apiData.video.title}</h3>
                                    <h3>movieId: {apiData.video.movieId}</h3>
                                </>
                            )}
                        </S.OutputForm>
                    </>
                ) : (
                    <>
                        <AllOutputForm />
                    </>
                )}
            </S.ApiWrap >
        </>
    )
}
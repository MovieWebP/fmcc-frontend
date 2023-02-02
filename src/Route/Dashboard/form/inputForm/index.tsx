import axios from "axios";
import { useState } from "react";
import * as S from "./style"
import { InputDiv } from "../../inputdiv"

interface InputFormProps {
    title: string;
    baseUrl: string;
    // get useState function
    setApiData: React.Dispatch<React.SetStateAction<IForm | undefined>>;
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

export const InputForm: React.FC<InputFormProps> = ({ title, baseUrl, setApiData }) => {

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
        </>
    )
}
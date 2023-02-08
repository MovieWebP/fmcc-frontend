import axios from "axios";
import { useState } from "react";
import * as S from "./style"
import { InputDiv } from "../../inputdiv"
import { IForm } from "..";

interface InputFormProps {
    title: string;
    baseUrl: string;
    setApiData: React.Dispatch<React.SetStateAction<IForm | undefined>>;
}

export const InputForm: React.FC<InputFormProps> = ({ title, baseUrl, setApiData }) => {


    const rest = (e: React.FormEvent<HTMLFormElement>, title: string) => {
        if (title === "Create") {
            return {
                "url": `${Object(e.target)[0].value}`,
                "title": `${Object(e.target)[1].value}`,
                "movieId": +Object(e.target)[2].value,
                "backdrop_path": `${Object(e.target)[3].value}`,
            }
        }
        else if (title === "Update") {
            return {
                "videoId": +Object(e.target)[0].value,
                "url": `${Object(e.target)[1].value}`,
                "title": `${Object(e.target)[2].value}`,
                "movieId": +Object(e.target)[3].value,
                "backdrop_path": `${Object(e.target)[4].value}`,
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
                    // console.log(res.data, "res.data");
                    setApiData(res.data);
                })
        } catch (err) {
            console.log(Object(e.target)[0].value)
            console.log(err)
        }
    };

    const baseInfo =
        <>
            <InputDiv name="url" />
            <InputDiv name="title" />
            <InputDiv name="movieId" />
            <InputDiv name="backdrop_path" />
        </>

    return (
        <>
            <S.InputFrom onSubmit={onSubmit}>
                {title === "Create" && (
                    baseInfo
                )}
                {title === "Update" && (
                    <>
                        <InputDiv name="videoId" />
                        {baseInfo}
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
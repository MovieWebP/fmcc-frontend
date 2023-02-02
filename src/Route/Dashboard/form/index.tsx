import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputDiv } from "../inputdiv";
import { AllOutputForm } from "./allOutputForm";
import { InputForm } from "./inputForm";
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

    return (
        <>
            <S.SliderTitle>{title}</S.SliderTitle>
            <S.ApiWrap>
                {title !== "GetAll" ? (
                    <>
                        <InputForm title={title} baseUrl={baseUrl} setApiData={setApiData} />
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
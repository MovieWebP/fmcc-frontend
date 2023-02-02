import { useState } from "react";
import { AllOutputForm } from "./allOutputForm";
import { InputForm } from "./inputForm";
import { OutputForm } from "./outputForm";
import * as S from "./style"

interface FormProps {
    title: string;
    baseUrl: string;
}

export interface IForm {
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
                        <OutputForm apiData={apiData} />
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
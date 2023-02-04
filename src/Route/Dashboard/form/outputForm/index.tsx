import { IForm } from "..";
import * as S from "./style"

interface OutputFormProps {
    // get useState vlaue
    apiData: IForm | undefined;
}


export const OutputForm: React.FC<OutputFormProps> = ({ apiData }) => {
    return (
        <>
            <S.OutputForm>
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
                        <h3>backdrop_path: {apiData.video.backdrop_path}</h3>
                    </>
                )}
            </S.OutputForm>
        </>
    )
}
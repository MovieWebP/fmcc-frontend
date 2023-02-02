import { useEffect, useState } from "react";
import * as S from "./style"

interface AllOutputFormProps {
    ok: boolean
    results: [GetMovieProps];
    totalResults: number
    totalPages: number
}

interface GetMovieProps {
    url: string
    title: string
    movieId: number
    id: number
}

export const AllOutputForm: React.FC = () => {
    const [videos, setVideos] = useState<AllOutputFormProps>()
    const getMovies = async () => {
        const json = await (await fetch(`http://localhost:3005/video/all/1`
        )).json();
        // console.log(json)
        setVideos(json)
    }
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <S.GetAllOutputForm>
            {"{"}
            <br />
            <S.GetAllOutputItem>ok: {videos?.ok.toString()}</S.GetAllOutputItem>
            <S.GetAllOutputItem>results: [
                {videos?.results?.map((video: GetMovieProps) => (
                    <>
                        <div key={video.movieId}>
                            <S.GetAllOutputObjectItem>{"-{"}</S.GetAllOutputObjectItem>

                            <S.GetAllOutputResultItem>id: {video.id}</S.GetAllOutputResultItem>
                            <S.GetAllOutputResultItem>url: {video.url}</S.GetAllOutputResultItem>
                            <S.GetAllOutputResultItem>title: {video.title}</S.GetAllOutputResultItem>
                            <S.GetAllOutputResultItem>movieId: {video.movieId}</S.GetAllOutputResultItem>

                            <S.GetAllOutputObjectItem>{"},"}</S.GetAllOutputObjectItem>
                        </div>
                    </>
                ))}
                ],
            </S.GetAllOutputItem>
            <S.GetAllOutputItem>totalResults: {videos?.totalResults}</S.GetAllOutputItem>
            <S.GetAllOutputItem>totalPage: {videos?.totalPages}</S.GetAllOutputItem>
            <S.GetAllOutputItem>{"}"}</S.GetAllOutputItem>
        </S.GetAllOutputForm>
    )
}
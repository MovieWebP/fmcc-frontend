import { useEffect, useState } from "react";
import * as S from "./style"

interface AllOutputFormProps {
    ok: boolean
    results: [GetMovieProps];
    totalResults: number
    totalPages: number
}

interface GetMovieProps {
    id: number
    url: string
    title: string
    movieId: number
    backdrop_path: string
}

export const AllOutputForm: React.FC = () => {
    const [videos, setVideos] = useState<AllOutputFormProps>()
    const getMovies = async () => {
        const json = await (await fetch(`http://175.193.156.87:3005/video/all/1`
        )).json();
        setVideos(json)
    }
    useEffect(() => {
        getMovies()
    }, [])
    console.log(videos?.results.map((index: GetMovieProps) => index.title), "videos")

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
                            <S.GetAllOutputResultItem>url: "{video.url}"</S.GetAllOutputResultItem>
                            <S.GetAllOutputResultItem>title: "{video.title}"</S.GetAllOutputResultItem>
                            <S.GetAllOutputResultItem>movieId: {video.movieId}</S.GetAllOutputResultItem>
                            <S.GetAllOutputResultItem>backdrop_path: "{video.backdrop_path}"</S.GetAllOutputResultItem>
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
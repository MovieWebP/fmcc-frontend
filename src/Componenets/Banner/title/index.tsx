import { useEffect, useState } from "react";
import { IMovie } from "../../../Api/api";
import * as S from "./style";

interface TitleProps {
    movie: IMovie;
    part: string;
}

export const Title: React.FC<TitleProps> = ({ movie, part }) => {
    const [windowDimension, detectHW] = useState({ winWidth: window.innerWidth })

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension]);
    return (
        <S.TitleDiv>
            {
                windowDimension.winWidth <= 500 ? (
                    movie.title?.length < 15 || movie.name?.length < 15 ? (
                        <S.Title>
                            {part === "movie" ? movie.title : movie.name}
                        </S.Title>
                    ) : (
                        <S.Title>
                            {part === "movie" ? movie.title?.slice(0, 15) : movie.name?.slice(0, 15)}...
                        </S.Title>
                    )
                ) : (
                    <S.Title>
                        {part === "movie" ? (movie.title) : (movie.name)}
                    </S.Title>
                )
            }
            <S.Date>({part === "movie" ? (
                movie?.release_date.slice(0, 4)
            ) : (
                movie?.first_air_date?.slice(0, 4)
            )})
            </S.Date>
        </S.TitleDiv>
    )
}
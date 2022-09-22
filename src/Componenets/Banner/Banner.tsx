import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMovie } from "../../Api/api";
import { makeImagePath } from "../../Api/utils";
import { modalState } from "../../atom";
import * as S from "./BannerStyle";
interface IBanner {
    id: string;
    part: string;
    movies: IMovie[];
}

function Banner({ part, id, movies }: IBanner) {
    const totalMovies = movies?.length;
    const maxIndex = Math.floor(totalMovies / 5);
    const [movie, setMovie] = useState<IMovie>();
    useEffect(() => {
        if (movies) setMovie(movies[Math.floor(Math.random() * totalMovies)]);
    }, [movies])
    const [isModalActive, setisModalActive] = useRecoilState(modalState);
    const navigate = useNavigate();
    const handleModal = (part: string, id: number, sliderId: string) => {
        navigate(`/${part}/${sliderId}/${id}`);
        setisModalActive(true)
    }
    return (
        <>
            {movie ? (
                <S.Wrap>
                    <S.MainImage
                        bgPhoto={[makeImagePath(movie?.backdrop_path), makeImagePath(movie?.backdrop_path), makeImagePath(movie?.backdrop_path), makeImagePath(movie?.backdrop_path), makeImagePath(movie?.backdrop_path)]}
                    >
                        <S.BannerWrap>

                            <S.Title>{part === "movie" ? movie?.title : movie?.name}</S.Title>
                        </S.BannerWrap>
                    </S.MainImage>
                </S.Wrap>
            ) : null}
        </>
    );
}

export default Banner;
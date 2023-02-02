import * as S from "../SlideStyle";
import Slider from "react-slick";
import { IMovie } from "../../../Api/api";
import { makeImagePath } from "../../../Api/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from "recoil";
import { modalState } from "../../../atom";
import { useNavigate } from "react-router-dom";
import { StyledSlider } from "./style"

interface IProp {
    settings: object,
    movies: IMovie[],
    part: string,
    id: string
}

function SlickSlider({ settings, movies, part, id }: IProp) {
    const [modalActive, setModalActive] = useRecoilState(modalState);
    const navigate = useNavigate();
    const boxClick = (part: string, id: number, sliderId: string) => {
        navigate(`/${part}/${sliderId}/${id}`);
        setModalActive(true);
    };

    return (
        <StyledSlider {...settings}>
            {movies
                ?.map((movie) => (
                    <S.Movie key={movie.id}>
                        <S.MovieImage src={makeImagePath(movie.poster_path)} onClick={() => boxClick(part, movie.id, id)} />
                        <S.MovieTitleWrap>
                            <S.MovieTitle
                                onClick={() => boxClick(part, movie.id, id)}
                                key={movie.id}
                            >{part === "movie" ? movie.title : movie.name}
                            </S.MovieTitle>
                        </S.MovieTitleWrap>
                    </S.Movie>
                ))
            }
        </StyledSlider >
    )
}

export default SlickSlider;
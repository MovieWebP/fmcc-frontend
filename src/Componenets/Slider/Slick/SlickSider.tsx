import * as S from "../SlideStyle";
import Slider from "react-slick";
import { IMovie } from "../../../Api/api";
import { makeImagePath } from "../../../Api/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from "recoil";
import { modalState } from "../../../atom";
import { useNavigate } from "react-router-dom";
import { StyledSlider } from "./SlickStyle"

interface IProp {
    settings: object,
    movies: IMovie[],
    part: string,
    id: string
}

function SlickSider({ settings, movies, part, id }: IProp) {
    const [modalActive, setModalActive] = useRecoilState(modalState);
    const history = useNavigate();
    const boxClick = (part: string, id: number, sliderId: string) => {
        history(`/${part}/${sliderId}/${id}`);
        setModalActive(true);
    };

    return (
        <StyledSlider {...settings}>
            {movies
                ?.map((movie) => (
                    <S.Movie key={movie.id}>
                        <S.MovieImage />
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

export default SlickSider
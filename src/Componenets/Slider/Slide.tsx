import { IMovie } from "../../Api/api";
import * as S from "./SlideStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import SlickSlider from "./Slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { modalState } from "../../atom";
import { makeImagePath } from "../../Api/utils";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { PrevArrow } from "./Slick/PrevArrow";
import { NextArrow } from "./Slick/NextArrow";

interface IProps {
    id: string;
    part: string;
    title: string;
    query: string;
    movies: IMovie[];
}

let slidesToShow = 6;

function Slide({ id, part, title, movies }: IProps) {

    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: slidesToShow,
        speed: 1000,
        pauseOnHover: true,
        draggable: true,
        nextArrow: <NextArrow slidesToShow={slidesToShow} />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 2570,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                }
            },
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 5.5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 3,
                }
            },
        ]
    };


    const [modalActive, setModalActive] = useRecoilState(modalState);
    const navigate = useNavigate();
    const boxClick = (part: string, id: number, sliderId: string) => {
        navigate(`/${part}/${sliderId}/${id}`);
        setModalActive(true);
    };

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

    if (windowDimension.winWidth <= 800) {
        slidesToShow = 3.5;
    } else if (windowDimension.winWidth > 800 && windowDimension.winWidth <= 1300) {
        slidesToShow = 4.5;
    } else if (windowDimension.winWidth > 1300 && windowDimension.winWidth <= 1800) {
        slidesToShow = 5.5;
    } else if (windowDimension.winWidth > 1800 && windowDimension.winWidth <= 2000) {
        slidesToShow = 7;
    } else {
        slidesToShow = 8;
    }

    return (
        <S.SliderWrap>
            <S.TitleWrap>
                <S.Title>{title}</S.Title>
            </S.TitleWrap>
            <S.Wrap>
                <S.Slider>
                    {windowDimension.winWidth <= 500 ? (
                        <>
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
                                ))}
                        </>
                    ) : (
                        <SlickSlider
                            settings={{ ...settings }}
                            id={id}
                            part={part}
                            movies={movies}
                        />
                    )}
                </S.Slider>
            </S.Wrap>
        </S.SliderWrap >
    );
}

export default Slide;
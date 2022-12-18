import { IMovie } from "../../Api/api";
import * as S from "./SlideStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import SlickSider from "./Slick/SlickSider";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { modalState } from "../../atom";
import { makeImagePath } from "../../Api/utils";
import { StyledSlider } from "./Slick/SlickStyle";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IProps {
    id: string;
    part: string;
    title: string;
    query: string;
    movies: IMovie[];
}


function Slide({ id, part, title, movies }: IProps) {

    const NextArrow = (props: any) => {
        const { className, style, onClick, slideCount, currentSlide, slidesToShow } = props;
        // console.log(slideCount)
        // console.log(currentSlide)
        return (
            <>
                {currentSlide !== 17.5 && (
                    <div
                        className={className}
                        style={{ ...style, display: "block" }}
                        onClick={onClick}
                    >
                        <FontAwesomeIcon icon={faChevronRight} size="3x" className="slick-arrow-icon-right" />
                    </div>
                )}
            </>
        );
    }

    const PrevArrow = (props: any) => {
        const { className, style, onClick, currentSlide } = props;
        return (
            <>
                {currentSlide !== 0 && (
                    <div
                        className={className}
                        style={{ ...style, display: "block" }}
                        onClick={onClick}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size="3x" className="slick-arrow-icon-left" />
                    </div>
                )}
            </>
        );
    }

    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        speed: 1000,
        pauseOnHover: true,
        draggable: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // onSwipe: ,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 2330, //화면 사이즈 960px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 2000, //화면 사이즈 960px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 7,
                    slidesToScroll: 7,
                }
            },
            {
                breakpoint: 1800, //화면 사이즈 960px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 5.5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1300, //화면 사이즈 960px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 4.5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 800, //화면 사이즈 960px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
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

    // console.log(windowDimension.winWidth)
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
                                        <S.MovieImage src={makeImagePath(movie.poster_path)} />
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
                        <SlickSider
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
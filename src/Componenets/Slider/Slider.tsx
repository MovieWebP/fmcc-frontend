import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMovie } from "../../Api/api";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { modalState } from "../../atom";
import * as S from "./SliderStyle";
import { makeImagePath } from "../../Api/utils";

const rowVariants = {
    hidden: ({ prev }: { prev: boolean }) => ({
        x: prev ? "-1550px" : "1550px",
    }),
    visible: {
        x: 0,
    },
    exit: ({ prev }: { prev: boolean }) => ({
        x: prev ? "1550px" : "-1550px",
    }),
}

interface IProps {
    id: string;
    part: string;
    title: string;
    query: string;
    movies: IMovie[];
}

const offset = 6;

function Slider({ id, part, title, movies }: IProps) {
    const [index, setIndex] = useState(0);
    const [sliderMov, setSliderMov] = useState(false);
    const [sliderMovPrev, setsliderMovPrev] = useState(false);

    const totalLength = movies.length - 1;
    const maxIndex = Math.floor(totalLength / offset) - 1;

    const nextslider = () => {
        if (!sliderMov && movies) {
            setSliderMov(true);
            setsliderMovPrev(false);
            setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        }
    };

    const prevslider = () => {
        if (!sliderMov && movies) {
            setSliderMov(false);
            setsliderMovPrev(true);
            setIndex((prev) => (prev === maxIndex ? prev - 1 : 0));
        };
    };

    const ExitSlider = () => {
        setSliderMov(false);
        setsliderMovPrev(false);
    }

    const [modalActive, setModalActive] = useRecoilState(modalState);
    const history = useNavigate();
    const boxClick = (part: string, id: number, sliderId: string) => {
        history(`/${part}/${sliderId}/${id}`);
        setModalActive(true);
    };

    return (
        <S.SliderWrap>
            <S.Wrap>
                <S.Title>{title}</S.Title>
                {index === 0 ? null : (
                    <S.IconLeft onClick={prevslider}>
                        <MdKeyboardArrowLeft size="60" />
                    </S.IconLeft>
                )}

                <AnimatePresence
                    custom={{ prev: sliderMovPrev }}
                    initial={false}
                    onExitComplete={ExitSlider}
                >
                    <S.Slider
                        key={index}
                        variants={rowVariants}
                        initial="hidden" // initial은 초기값
                        animate="visible" // animate은 애니메이션
                        exit="exit" // exit은 애니메이션 종료
                        custom={{ prev: sliderMovPrev }}
                        transition={{ type: "tween", duration: 1 }}
                    >

                        {movies
                            ?.slice(1)
                            .slice(offset * index, offset * index + offset)
                            .map((movie) => (
                                <S.Movie>
                                    <S.MovieImage src={makeImagePath(movie.poster_path)} />
                                    <S.MovieTitle
                                        onClick={() => boxClick(part, movie.id, id)}
                                        key={movie.id}
                                    >{part === "movie" ? (
                                        movie.title
                                    ) : (
                                        movie.name
                                    )}</S.MovieTitle>
                                </S.Movie>
                            ))
                        }

                    </S.Slider>

                </AnimatePresence>
                <S.IconRight onClick={nextslider} >
                    <MdKeyboardArrowRight size="60" />
                </S.IconRight>
            </S.Wrap>
        </S.SliderWrap>
    );
}

export default Slider;
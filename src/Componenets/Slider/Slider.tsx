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
        x: prev ? "-100vw" : "100vw",
    }),
    visible: {
        x: 0,
    },
    exit: ({ prev }: { prev: boolean }) => ({
        x: prev ? "100vw" : "-100vw",
    }),
}

interface IProps {
    id: string;
    part: string;
    title: string;
    query: string;
    movies: IMovie[];
}

const offset = 8;

function Slider({ id, part, title, movies }: IProps) {
    const [index, setIndex] = useState(0);
    const [sliderMov, setSliderMov] = useState(false);
    const [sliderMovPrev, setsliderMovPrev] = useState(false);

    const totalLength = 10;
    const maxIndex = Math.floor(totalLength / offset);

    const nextslider = () => {
        if (!sliderMov && movies) {
            setSliderMov(true);
            setsliderMovPrev(false);
            setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        }
    };

    const prevslider = () => {
        if (!sliderMovPrev && movies) {
            setSliderMov(false);
            setsliderMovPrev(true);
            setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
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
                <AnimatePresence
                    custom={{ prev: sliderMovPrev }}
                    initial={false}
                    onExitComplete={ExitSlider}
                >
                    <S.Slider
                        key={index}
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={{ prev: sliderMovPrev }}
                        transition={{ type: "tween", duration: 0.5 }}
                    >
                        {index === 0 ? null : (
                            <S.IconLeft onClick={prevslider}>
                                <MdKeyboardArrowLeft className="fas fa-chevron-left" />
                            </S.IconLeft>
                        )}
                        {movies?.
                            slice(1)
                            .slice(index * offset, (index + 1) * offset).map((movie) => (
                                <S.Movie>
                                    <img src={makeImagePath(movie.poster_path)} />
                                </S.Movie>
                            ))
                        }
                    </S.Slider>
                </AnimatePresence>
            </S.Wrap>
        </S.SliderWrap>
    );
}

export default Slider;
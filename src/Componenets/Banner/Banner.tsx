import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMovie } from "../../Api/api";
import { makeImagePath } from "../../Api/utils";
import { modalState } from "../../atom";
import * as S from "./BannerStyle";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const rowVariants = {
    hidden: ({ prev }: { prev: boolean }) => ({
        x: prev ? 'translate' : 'translate', // translate는 
    }),
    visible: ({ prev }: { prev: boolean }) => ({
        x: 0,
    }),
    exit: ({ prev }: { prev: boolean }) => ({
        x: prev ? 'translate' : 'translate',
    }),
    // hidden: ({ prev }: { prev: boolean }) => ({
    //     x: prev ? "-100vw" : "100vw",
    // }),
    // visible: ({ prev }: { prev: boolean }) => ({
    //     x: 0,
    // }),
    // exit: ({ prev }: { prev: boolean }) => ({
    //     x: prev ? "-100vw" : "100vw",
    // }),
}
interface IBanner {
    id: string;
    part: string;
    movies: IMovie[];
}

const offset = 1;

function Banner({ part, id, movies }: IBanner) {
    const [index, setIndex] = useState(0);
    const [sliderMoving, setSliderMoving] = useState(false);
    const [sliderMovingPrev, setSliderMovingPrev] = useState(false);

    const totlaLength = movies.length - 16;
    const maxIndex = Math.floor(totlaLength / offset);
    // slider + 1
    const moveSlider = () => {
        if (!sliderMoving && movies) {
            setSliderMoving(true);
            setSliderMovingPrev(false);
            setIndex((prev) => prev === maxIndex ? 0 : prev + 1);
        }
    }

    // slider - 1
    const moveSliderPrev = () => {
        if (!sliderMoving && movies) {
            setSliderMoving(true);
            setSliderMovingPrev(false);
            setIndex((prev) => prev === maxIndex ? 0 : prev - 1);
        }
    }

    // slider done
    const ExitMoveSlider = () => {
        setSliderMoving(false);
        setSliderMovingPrev(false);
    }

    const [isModalActive, setisModalActive] = useRecoilState(modalState);
    const navigate = useNavigate();
    const handleModal = (part: string, id: number, sliderId: string) => {
        navigate(`/${part}/${sliderId}/${id}`);
        setisModalActive(true)
    }

    return (
        <S.Wrap>
            <S.AllWrap>
                <AnimatePresence
                    custom={{ prev: sliderMovingPrev }}
                    initial={false}
                    onExitComplete={ExitMoveSlider}
                >
                    {movies
                        ?.slice(1)
                        .slice(offset * index, offset * index + offset).map((movie) => (
                            < S.MainImage
                                bgPhoto={makeImagePath(movie?.backdrop_path)}
                                variants={rowVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                custom={{ prev: sliderMoving }}
                                transition={{ type: "tween", duration: 0.5 }}
                                key={index}
                            >
                                {index === 0 ? null : (
                                    <S.ArrowBox onClick={moveSliderPrev}>
                                        <MdKeyboardArrowLeft size="60px" />
                                    </S.ArrowBox>
                                )}
                                <S.RightArrow onClick={moveSlider} >
                                    <MdKeyboardArrowRight size="60px" />
                                </S.RightArrow>
                                <S.BannerImage bgPhoto={makeImagePath(movie?.backdrop_path)}>
                                    <S.BannerWrap>
                                        <S.Title>{movie?.title || movie?.name}</S.Title>
                                        <S.Overview>{movie?.overview.slice(0, 150) || movie?.overview}...</S.Overview>
                                    </S.BannerWrap>
                                    <S.BannerWrap>
                                    </S.BannerWrap>
                                </S.BannerImage>
                            </S.MainImage>
                        ))}
                </AnimatePresence>
            </S.AllWrap>
        </S.Wrap >
    )
}

export default Banner;
import { AnimatePresence, transform } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMovie } from "../../Api/api";
import { makeImagePath } from "../../Api/utils";
import { modalState } from "../../atom";
import * as S from "./BannerStyle";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";

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
    const [modalActive, SetModalActive] = useRecoilState(modalState);
    const history = useNavigate();
    const boxClick = (part: string, id: number, sliderId: string) => {
        history(`/${part}/${sliderId}/${id}`);
        SetModalActive(true);
    }

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
            setSliderMoving(false);
            setSliderMovingPrev(true);
            setIndex((prev) => prev === maxIndex ? 0 : prev - 1);
        }
    }

    // slider done
    const ExitMoveSlider = () => {
        setSliderMoving(false);
        setSliderMovingPrev(false);
    }

    return (
        <S.Wrap>
            <S.AllWrap>
                <AnimatePresence
                    custom={{ prev: sliderMovingPrev }}
                    initial={false}
                    onExitComplete={ExitMoveSlider}
                >
                    <S.Banner
                        key={index}
                        variants={rowVariants}
                        initial="hidden" // initial은 초기값
                        animate="visible" // animate은 애니메이션
                        exit="exit" // exit은 애니메이션 종료
                        custom={{ prev: sliderMovingPrev }}
                        transition={{ type: "tween", duration: 1.3 }}>
                        {movies
                            ?.slice(1)
                            .slice(offset * index, offset * index + offset).map((movie) => (
                                < S.MainImage
                                    bgPhoto={makeImagePath(movie?.backdrop_path)}
                                >
                                    {index === 0 ? null : (
                                        <S.ArrowBox onClick={moveSliderPrev}>
                                            <MdKeyboardArrowLeft size="60px" />
                                        </S.ArrowBox>
                                    )}
                                    <S.BannerImage bgPhoto={makeImagePath(movie?.backdrop_path)}>
                                        <S.BannerWrap>
                                            <S.TitleDiv>
                                                <S.Title>{part === "movie" ? movie?.title : movie?.name}</S.Title>
                                                <S.Date>({part === "movie" ? movie?.release_date.slice(0, 4) : movie?.first_air_date?.slice(0, 4)})</S.Date>
                                            </S.TitleDiv>
                                            <S.Overview>{movie?.overview.slice(0, 150)}...</S.Overview>
                                            <S.Button onClick={() => boxClick(part, movie.id, id)}>
                                                <BsPlayFill size="20px" />
                                                <S.ButtonText>Watch Now</S.ButtonText>
                                            </S.Button>
                                        </S.BannerWrap>
                                    </S.BannerImage>
                                    <S.RightArrow onClick={moveSlider} >
                                        <MdKeyboardArrowRight size="60px" />
                                    </S.RightArrow>
                                </S.MainImage>
                            ))}
                    </S.Banner>
                </AnimatePresence>
            </S.AllWrap>
        </S.Wrap >
    )
}

export default Banner;
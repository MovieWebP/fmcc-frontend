import { AnimatePresence, transform } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMovie } from "../../Api/api";
import { makeImagePath } from "../../Api/utils";
import { modalState } from "../../atom";
import * as S from "./BannerStyle";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
    const navigate = useNavigate();
    const boxClick = (part: string, id: number, sliderId: string) => {
        navigate(`/${part}/${sliderId}/${id}`);
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
        <S.Wrap>
            <AnimatePresence
                custom={{ prev: sliderMovingPrev }}
                initial={false}
                onExitComplete={ExitMoveSlider}
            >
                <S.Banner
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "easeOut", duration: 0.8 }}>
                    {movies
                        ?.slice(0)
                        .slice(offset * index, offset * index + offset).map((movie) => (
                            <>
                                < S.MainImage
                                    key={movie.name}
                                    bgphoto={makeImagePath(movie?.backdrop_path)}
                                ></S.MainImage>
                                <S.ImageWrap key={movie.id}>
                                    {index === 0 ? (
                                        <S.HiddenBox onClick={moveSliderPrev}>
                                            <MdKeyboardArrowLeft size="5rem" />
                                        </S.HiddenBox>
                                    ) : (
                                        <S.ArrowBox onClick={moveSliderPrev}>
                                            <MdKeyboardArrowLeft size="5rem" />
                                        </S.ArrowBox>
                                    )}
                                    <S.BannerImage bgphoto={makeImagePath(movie?.backdrop_path)}>
                                        <S.BannerWrap>
                                            <S.TitleDiv>
                                                {windowDimension.winWidth <= 500 ? (
                                                    <S.Title>
                                                        {part === "movie" && movie.title.length < 15 ? (
                                                            movie.title
                                                        ) : (
                                                            movie.title.slice(0, 15) + "..."
                                                        ) && part !== "movie" && movie.name.length < 15 ? (
                                                            movie.name
                                                        ) : (
                                                            movie.name?.slice(0, 15) + "..."
                                                            // movie.name
                                                        )
                                                        }
                                                    </S.Title>
                                                ) : (
                                                    <S.Title>
                                                        {part === "movie" ? (movie.title) : (movie.name)}
                                                    </S.Title>
                                                )}
                                                <S.Date>({part === "movie" ? movie?.release_date.slice(0, 4) : movie?.first_air_date?.slice(0, 4)})</S.Date>
                                            </S.TitleDiv>
                                            {windowDimension.winWidth <= 700 && windowDimension.winWidth > 500 ? (
                                                <S.Overview>
                                                    {movie?.overview ? movie?.overview.slice(0, 85) + "..." : null}
                                                </S.Overview>
                                            ) : (
                                                <S.Overview>
                                                    {movie?.overview ? movie?.overview.slice(0, 110) + "..." : null}
                                                </S.Overview>
                                            )}
                                            <S.Button onClick={() => boxClick(part, movie.id, id)}>
                                                <S.PlayIcon />
                                                <S.ButtonText>Watch Now</S.ButtonText>
                                            </S.Button>
                                        </S.BannerWrap>
                                    </S.BannerImage>
                                    <S.RightArrow onClick={moveSlider} >
                                        <MdKeyboardArrowRight size="5rem" />
                                    </S.RightArrow>
                                </S.ImageWrap>
                            </>
                        ))}
                </S.Banner>
            </AnimatePresence>
        </S.Wrap >
    )
}

export default Banner;
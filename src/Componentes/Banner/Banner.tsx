import { AnimatePresence } from "framer-motion";
import { IMovie } from "../../Api/api";
import { makeImagePath } from "../../Api/utils";
import * as S from "./BannerStyle";
import { Title } from "./title";
import { Overview } from "./overview";
import { Button } from "./buttton";
import { LeftArrow } from "./arrow/left-arrow";
import { RightArrow } from "./arrow/right-arrow";
import { useState } from "react";

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

    const totalLength = movies.length - 16;
    const maxIndex = Math.floor(totalLength / offset);

    const moveSlider = () => {
        if (!sliderMoving && movies) {
            setSliderMoving(true);
            setSliderMovingPrev(false);
            setIndex((prev) => prev === maxIndex ? 0 : prev + 1);
        }
    }

    const moveSliderPrev = () => {
        if (!sliderMoving && movies) {
            setSliderMoving(false);
            setSliderMovingPrev(true);
            setIndex((prev) => prev === maxIndex ? 0 : prev - 1);
        }
    }

    const ExitMoveSlider = () => {
        setSliderMoving(false);
        setSliderMovingPrev(false);
    }

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
                                    <LeftArrow
                                        index={index}
                                        moveSliderPrev={moveSliderPrev}
                                    />
                                    <S.BannerImage bgphoto={makeImagePath(movie?.backdrop_path)}>
                                        <S.BannerWrap>
                                            <Title
                                                movie={movie}
                                                part={part}
                                            />
                                            <Overview
                                                movie={movie}
                                            />
                                            <Button
                                                movie={movie}
                                                id={id}
                                                part={part}
                                            />
                                        </S.BannerWrap>
                                    </S.BannerImage>
                                    <RightArrow
                                        index={index}
                                        moveSlider={moveSlider}
                                    />
                                </S.ImageWrap>
                            </>
                        ))}
                </S.Banner>
            </AnimatePresence>
        </S.Wrap >
    )
}

export default Banner;
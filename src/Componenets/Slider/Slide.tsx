import { AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMovie } from "../../Api/api";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { modalState } from "../../atom";
import * as S from "./SlideStyle";
import { makeImagePath } from "../../Api/utils";
import SlickSider from "./SlickSider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const rowVariants = {
    hidden: ({ prev }: { prev: boolean }) => ({
        x: prev ? "-95%" : "95%",
    }),
    visible: {
        x: 0,
    },
    exit: ({ prev }: { prev: boolean }) => ({
        x: prev ? "95%" : "-95%",
    }),
}

interface IProps {
    id: string;
    part: string;
    title: string;
    query: string;
    movies: IMovie[];
}

const offset = 6

function Slide({ id, part, title, movies }: IProps) {
    const [index, setIndex] = useState(0);
    const [sliderMov, setSliderMov] = useState(false);
    const [sliderMovPrev, setsliderMovPrev] = useState(false);

    const totalLength = movies.length - 1;
    const maxIndex = Math.floor(totalLength / offset) - 1;


    function NextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronRight} size="3x" className="slick-arrow-icon-right" />
            </div>
        );
    }


    function PrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} size="3x" className="slick-arrow-icon-left" />
            </div>
        );
    }

    const settingsBig = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        speed: 1000,
        pauseOnHover: true,
        draggable: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const settings2 = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        nextArrow: <MdKeyboardArrowRight size="4rem" />,
        prevArrow: <MdKeyboardArrowLeft size="4rem" />
    };

    const settings3 = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        nextArrow: <MdKeyboardArrowRight size="2rem" />,
        prevArrow: <MdKeyboardArrowLeft size="2rem" />
    };



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

    console.log(windowDimension.winWidth)

    return (
        <S.SliderWrap>
            <S.TitleWrap>
                <S.Title>{title}</S.Title>
            </S.TitleWrap>
            <S.Wrap>
                {/* <S.IconLeftDiv>
                    {index === 0 ? null : (
                        <S.IconLeft onClick={prevslider}>
                            <MdKeyboardArrowLeft size="4rem" />
                        </S.IconLeft>
                    )}
                </S.IconLeftDiv> */}
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
                        {windowDimension.winWidth === 500 ? (
                            <SlickSider
                                settings={{ ...settingsBig }}
                                id={id}
                                part={part}
                                movies={movies}
                            />
                        ) : (
                            windowDimension.winWidth === 700 ?
                                (
                                    <SlickSider
                                        settings={{ ...settingsBig }}
                                        id={id}
                                        part={part}
                                        movies={movies}
                                    />
                                ) : (
                                    <SlickSider
                                        settings={{ ...settingsBig }}
                                        id={id}
                                        part={part}
                                        movies={movies}
                                    />
                                )
                        )}
                    </S.Slider>
                </AnimatePresence>
                {/* <S.IconRightDiv>
                    <S.IconLeft onClick={nextslider} >
                        <MdKeyboardArrowRight size="4rem" />
                    </S.IconLeft>
                </S.IconRightDiv> */}
            </S.Wrap>
        </S.SliderWrap >
    );
}

export default Slide;
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMovie } from "../../Api/api";
import styled from "styled-components";
import { makeImagePath } from "../../Api/utils";
import { modalState } from "../../atom";
import * as S from "./BannerStyle";
import { Link } from "react-router-dom";
interface IBanner {
    id: string;
    part: string;
    movies: IMovie[];
}
interface Props {
    className?: any;
    style?: any;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const offset = 1;

function Banner({ part, id, movies }: IBanner) {

    const [isModalActive, setisModalActive] = useRecoilState(modalState);
    const navigate = useNavigate();
    const handleModal = (part: string, id: number, sliderId: string) => {
        navigate(`/${part}/${sliderId}/${id}`);
        setisModalActive(true)
    }

    const totlaLength = movies.length - 16;
    const maxIndex = Math.floor(totlaLength / offset);

    const NextArrow: React.FC<Props> = ({ className, style, onClick }) => {
        return (
            <div
                className={className}
                style={{ ...style, display: "block", border: "1px solid red" }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronRight} size="3x" className="slick-arrow-icon-right" style={{ color: "white" }} />
            </div>
        );
    }


    const PrevArrow: React.FC<Props> = ({ className, style, onClick }) => {
        console.log("prev")
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} size="3x" className="slick-arrow-icon-right" />
            </div>
        );
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
    return (
        <S.StyledSlider {...settings}>
            <S.Wrap>
                {movies
                    .filter((item, index) => (index >= 10))
                    .map((item, index) => (
                        < S.MainImage
                            key={item.id}
                            bgphoto={makeImagePath(item?.backdrop_path)}
                        >
                            <S.BannerImage bgphoto={makeImagePath(item?.backdrop_path)}>
                                <S.BannerWrap>
                                    <S.Title>{item?.title || item?.name}</S.Title>
                                    <S.Overview>{item?.overview.slice(0, 150)}...</S.Overview>
                                </S.BannerWrap>
                            </S.BannerImage>
                        </S.MainImage>

                    ))}
            </S.Wrap>
        </S.StyledSlider >
    );
}

export default Banner;
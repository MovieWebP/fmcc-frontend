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

const Slide = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 150px);
  padding: 50px 100px;
  /* border: 10px solid white; */
`;

const Background = styled.div<{ imgUrl: string }>`
  border: 10px solid red;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.imgUrl});
  background-position: center;
  background-size: cover;
  opacity: 0.6;
  z-index: -1;
`;

const Contents = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Subtitle = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
`;

const MovieTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 54px;
  text-align: right;
  color: #e50914;
  font-weight: 900;
  text-shadow: 2px 2px 0px #fff, 6px 6px 0px rgb(54 54 54 / 50%);
`;

const ViewDetailBtn = styled(Link)`
  display: block;
  padding: 15px 30px;
  background: #e50914;
  color: #fff;
  font-weight: 600;
  border-radius: 30px;
  transition: .3s linear;

  &:hover {
    background: #fff;
    color: #e50914;
  }
`;
interface IBanner {
    id: string;
    part: string;
    movies: IMovie[];
}

interface IProps {
    props?: any;
}

function Banner({ part, id, movies }: IBanner) {

    const [isModalActive, setisModalActive] = useRecoilState(modalState);
    const navigate = useNavigate();
    const handleModal = (part: string, id: number, sliderId: string) => {
        navigate(`/${part}/${sliderId}/${id}`);
        setisModalActive(true)
    }

    function NextArrow({ props }: IProps) {
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


    function PrevArrow({ props }: IProps) {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        <S.StyledSlider {...settings}>
            {/* <S.Wrap>
                <S.AllWrap>
                    {movies
                        .filter((item, index) => (index >= 10))
                        .map((item, index) => (
                            < S.MainImage
                                bgPhoto={makeImagePath(item?.backdrop_path)}
                            >
                                <S.BannerImage bgPhoto={makeImagePath(item?.backdrop_path)}>
                                    <S.BannerWrap>
                                        <S.Title>{item?.title || item?.name}</S.Title>
                                        <S.Overview>{item?.overview.slice(0, 150)}...</S.Overview>
                                    </S.BannerWrap>
                                </S.BannerImage>
                            </S.MainImage>
                        ))}
                </S.AllWrap>
            </S.Wrap > */}
            {
                movies
                    .filter((item, index) => (index >= 10)) // 10개 이상의 데이터만 가져옴
                    .map((item, index) => (
                        <Slide key={item.id}>
                            <Background imgUrl={item.backdrop_path !== null ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : "#1d1d1d"} />
                            <Contents>
                                <Subtitle>Today's special movie {index + 1}</Subtitle>
                                <MovieTitle>{item.title}</MovieTitle>
                                <ViewDetailBtn to={`/movie/${item.id}`}>View detail →</ViewDetailBtn>
                            </Contents>
                        </Slide>
                    ))
            }
        </S.StyledSlider >
    );
}

export default Banner;
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
import { CustomArrowProps } from "react-slick";


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
interface Props {
    className?: any;
    style?: any;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const offset = 1;

function Banner({ part, id, movies }: IBanner) {
    const [index, setIndex] = useState(0)
    const [isModalActive, setisModalActive] = useRecoilState(modalState);
    const navigate = useNavigate();
    const handleModal = (part: string, id: number, sliderId: string) => {
        navigate(`/${part}/${sliderId}/${id}`);
        setisModalActive(true)
    }

    const totlaLength = movies.length - 16;
    const maxIndex = Math.floor(totlaLength / offset);

    const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
        setIndex((prev) => prev === maxIndex ? 0 : prev + 1)
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


    const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
        console.log(PrevArrow)
        setIndex((prev) => prev === maxIndex ? 0 : prev - 1);
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
    console.log(settings)
    return (
        <S.StyledSlider {...settings}>
            {movies
                ?.slice(1)
                .slice(offset * index, offset * index + offset).map((movie) => (
                    // <S.Wrap>
                    //     < S.MainImage
                    //         bgphoto={makeImagePath(movie?.backdrop_path)}
                    //     >
                    //         <S.BannerImage bgphoto={makeImagePath(movie?.backdrop_path)}>
                    //             <S.BannerWrap>
                    //                 <S.Title>{movie?.title || movie?.name}</S.Title>
                    //                 <S.Overview>{movie?.overview.slice(0, 150)}...</S.Overview>
                    //             </S.BannerWrap>
                    //         </S.BannerImage>
                    //     </S.MainImage>
                    // </S.Wrap>
                    <Slide>
                        <Background imgUrl={makeImagePath(movie?.backdrop_path)} />
                        <Contents>
                            <Subtitle>Today's special movie {index + 1}</Subtitle>
                            <MovieTitle>{movie.title}</MovieTitle>
                            <ViewDetailBtn to={`/movie/${movie.id}`}>View detail →</ViewDetailBtn>
                        </Contents>
                    </Slide>
                ))}
        </S.StyledSlider >
    );
}

export default Banner;
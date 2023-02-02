import { ICast, IGetDetail, IGetRecommends } from "../../Api/api";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import * as S from "./DetailStyle"
import { modalState } from "../../atom";
import { useRecoilState } from "recoil";
import { AnimatePresence } from "framer-motion";
import { makeImagePath } from "../../Api/utils";
import Trailer from "./Trailer";
import { Helmet } from "react-helmet";
import { Rating } from "react-simple-star-rating";
import { useEffect, useState } from "react";
import { Clip } from "./modalTop/clip";

interface IModal {
    detail: IGetDetail;
    cast: ICast[];
    recommend?: IGetRecommends;
}

function Detail({ detail, recommend, cast }: IModal) {
    const modalMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const part = modalMatch?.params.part;
    const sliderPart = modalMatch?.params.sliderPart;
    const id = modalMatch?.params.id;

    const navigate = useNavigate();

    const [modalActive, setModalActive] = useRecoilState(modalState);

    const modalOpen = (
        part: string | undefined,
        id: number,
        sliderId: string | undefined
    ) => {
        setModalActive(true);
        navigate(`/${part}/${sliderId}/${id}`);
    };

    const recommends = recommend?.results?.slice(0, 6);
    const cates = cast.slice(0, 6);

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
        <>
            <Helmet>
                <title>{detail?.title || detail?.name}</title>
            </Helmet>
            {modalMatch ? (
                <>
                    <S.Wrap>
                        <S.WrapImage bgPhoto={makeImagePath(detail?.backdrop_path)}></S.WrapImage>
                        <S.ModalTop>
                            <Clip detail={detail} part={part} id={id} />
                            <S.ModalContainer>
                                <S.ModalImage src={makeImagePath(detail?.poster_path)} />
                                {/*  */}
                            </S.ModalContainer>
                            {windowDimension.winWidth <= 500 ? (null) : (
                                <S.InfoModalContainer>
                                    <S.OverviewTitle>Info</S.OverviewTitle>
                                    <S.Overview>
                                        <S.InfoName>Title: </S.InfoName>
                                        <S.InfoMovieName>{part === "movie" ? detail?.title : detail?.name}</S.InfoMovieName>
                                    </S.Overview>
                                    <S.Overview>
                                        <S.InfoName>Cast: </S.InfoName>
                                        <S.InfoMovieName>{cast.slice(0, 4).map
                                            ((casts: any) => casts.name).join(", ")}
                                        </S.InfoMovieName>
                                    </S.Overview>
                                    <S.Overview>
                                        <S.InfoName>Genres: </S.InfoName>
                                        <S.InfoMovieName>{detail?.genres?.length ? (
                                            <S.InfoMovieName>
                                                {(detail.genres || []).map
                                                    ((genre: any) => genre.name).join(", ")}
                                            </S.InfoMovieName>
                                        ) : null}</S.InfoMovieName>
                                    </S.Overview>
                                    <S.Overview>
                                        <S.InfoName>Rating: </S.InfoName>
                                        <S.InfoMovieName>
                                            <Rating
                                                readonly
                                                style={{ "marginBottom": "3px" }}
                                                initialValue={detail?.vote_average / 2}
                                                transition
                                                size={13}
                                                emptyColor="gray"
                                            />
                                            {Math.round(detail?.vote_average * 10) / 10}
                                        </S.InfoMovieName>
                                    </S.Overview>
                                </S.InfoModalContainer>)}
                        </S.ModalTop>
                        <S.ModalBottom>
                            <S.CopyContainer>
                                {cast ? (
                                    <>
                                        <S.OverviewTitle>Cast</S.OverviewTitle>
                                        <div>
                                            <S.RecommendWrap>
                                                {cates.map((casts: any) => (
                                                    <S.RecommendSlider>
                                                        <S.CastImageWrap>
                                                            <S.CastImg
                                                                src={makeImagePath(
                                                                    casts?.profile_path,
                                                                )}
                                                            />
                                                        </S.CastImageWrap>
                                                        <S.CastTitle>{casts?.name}</S.CastTitle>
                                                        <S.Character>{casts?.character}</S.Character>
                                                    </S.RecommendSlider>
                                                ))}
                                            </S.RecommendWrap>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <S.OverviewTitle>No Recommends</S.OverviewTitle>
                                    </>
                                )}
                            </S.CopyContainer>
                            <S.ModalContainers>
                                {recommends ? (
                                    <>
                                        <S.OverviewTitle>Recommends</S.OverviewTitle>
                                        <div>
                                            <S.RecommendWrap>
                                                {recommends?.map((recommend: any) => (
                                                    <S.RecommendSlider>
                                                        <S.RecommendImg
                                                            src={makeImagePath(
                                                                recommend.poster_path
                                                            )}
                                                        />
                                                        <S.RecommendTitle
                                                            key={recommend.id}
                                                            onClick={() =>
                                                                modalOpen(part, recommend.id, id)
                                                            }
                                                        >{part === "movie" ? recommend?.title : recommend?.name}
                                                        </S.RecommendTitle>
                                                    </S.RecommendSlider>
                                                ))}
                                            </S.RecommendWrap>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <S.OverviewTitle>No Recommends</S.OverviewTitle>
                                    </>
                                )}
                            </S.ModalContainers>
                        </S.ModalBottom>
                        <S.Doc>2023 choi138.tk, All rights reserved.</S.Doc>
                    </S.Wrap>
                </>
            ) : null}
        </>
    )
};

export default Detail;
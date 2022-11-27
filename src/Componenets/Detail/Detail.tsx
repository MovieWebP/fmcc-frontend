import { ICast, IGetDetail, IGetRecommends } from "../../Api/api";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import * as S from "./DetailStyle"
import { modalState } from "../../atom";
import { useRecoilState } from "recoil";
import { AnimatePresence } from "framer-motion";
import { makeImagePath } from "../../Api/utils";
import Trailer from "./Trailer/Trailer";
import { Helmet } from "react-helmet";
import { Rating } from "react-simple-star-rating";

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

    const modalClose = () => {
        setModalActive(false);
        navigate(-1);
        // navigate("/");
    };

    const recommends = recommend?.results?.slice(0, 4);

    return (
        <>
            <Helmet>
                <title>{detail?.title || detail?.name}</title>
            </Helmet>
            <AnimatePresence>
                {modalMatch ? (
                    <>
                        <S.Wrap>
                            <S.WrapImage bgPhoto={makeImagePath(detail?.backdrop_path)}></S.WrapImage>
                            <S.ModalContianerWrap>
                                <S.ModalClips bgPhoto={makeImagePath(
                                    detail?.backdrop_path
                                )}>
                                    <S.Video>
                                        <Trailer part={part} id={id} />
                                    </S.Video>
                                </S.ModalClips>
                                <S.ModalContianer>
                                    <S.ModalImage src={makeImagePath(detail?.poster_path)} />
                                    <S.ModalInfo>
                                        <S.InfoTitle>{part === "movie" ? detail?.title : detail?.name}</S.InfoTitle>

                                        <S.Genres>
                                            <S.InfoDate>{part === "movie" ? detail?.release_date?.slice(0, 4) : detail?.first_air_date?.slice(0, 4)}</S.InfoDate>
                                            {detail?.genres?.length ? (
                                                <S.Genre>
                                                    {(detail.genres || []).map
                                                        ((genre: any) => genre.name).join("/")}
                                                </S.Genre>
                                            ) : null}
                                        </S.Genres>
                                        <S.DummyDiv></S.DummyDiv>
                                        <S.SumDiv>
                                            <S.InfoDate>Summary</S.InfoDate>
                                            <S.InfoOverview>{detail?.overview}</S.InfoOverview>
                                        </S.SumDiv>
                                    </S.ModalInfo>
                                </S.ModalContianer>
                                <S.InfoModalContainer>
                                    <S.OverviewTitle>Info</S.OverviewTitle>
                                    <S.Overview>
                                        <S.InfoName>Title: </S.InfoName>
                                        <S.InfoMovieName>{part === "movie" ? detail?.title : detail?.name}</S.InfoMovieName>
                                    </S.Overview>
                                    <S.Overview>
                                        <S.InfoName>Cast: </S.InfoName>
                                        <S.InfoMovieName>{cast.slice(0, 4).map
                                            ((casts: any) => casts.name).join(", ")}</S.InfoMovieName>
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
                                                initialValue={detail?.vote_average / 2}
                                                size={20}
                                                transition
                                                emptyColor="gray"
                                            />
                                            {Math.round(detail?.vote_average * 10) / 10}
                                        </S.InfoMovieName>
                                    </S.Overview>
                                </S.InfoModalContainer>
                            </S.ModalContianerWrap>
                            <S.ModalContianerWrap>

                            </S.ModalContianerWrap>
                            <S.ModalContianerWrap>
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
                                <S.CopyContainer>
                                    {cast ? (
                                        <>
                                            <S.OverviewTitle>Cast</S.OverviewTitle>
                                            <div>
                                                <S.RecommendWrap>
                                                    {cast.slice(0, 4).map((casts: any) => (
                                                        <S.RecommendSlider>
                                                            <S.RecommendImg
                                                                src={makeImagePath(
                                                                    casts?.profile_path,
                                                                    "w500"
                                                                )}
                                                            />
                                                            <S.RecommendTitle>{casts?.name}</S.RecommendTitle>
                                                        </S.RecommendSlider>
                                                    ))}
                                                </S.RecommendWrap>
                                            </div>
                                        </>
                                    ) : null}
                                </S.CopyContainer>
                            </S.ModalContianerWrap>
                        </S.Wrap>
                    </>
                ) : null}
            </AnimatePresence>
        </>
    )
};

export default Detail;
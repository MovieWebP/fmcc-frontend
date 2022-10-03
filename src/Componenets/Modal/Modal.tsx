import { ICast, IGetDetail, IGetRecommends } from "../../Api/api";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import * as S from "./ModalStyle"
import { modalState } from "../../atom";
import { useRecoilState } from "recoil";
import { AnimatePresence } from "framer-motion";
import { makeImagePath } from "../../Api/utils";
import Trailer from "./Trailer/Trailer";

interface IModal {
    detail: IGetDetail;
    cast: ICast[];
    clips?: [string];
    recommend?: IGetRecommends;
}

function Modal({ detail, recommend, cast, clips }: IModal) {
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

    const recommends = recommend?.results?.slice(0, 3);

    return (
        <>
            <AnimatePresence>
                {modalMatch ? (
                    <>
                        <S.Wrap bgPhoto={makeImagePath(detail?.backdrop_path)}>
                            <S.ModalContianerWrap>
                                <S.ModalContianer>
                                    <S.ModalImage src={makeImagePath(detail?.poster_path)} />
                                    <S.ModalInfo>
                                        <S.InfoTitle>{part === "movie" ? detail?.title : detail?.name}</S.InfoTitle>
                                        <S.InfoDate>{part === "movie" ? detail?.release_date?.slice(0, 4) : detail?.first_air_date?.slice(0, 4)}</S.InfoDate>
                                        <S.Genres>Genres: {detail?.genres?.length ? (
                                            <S.Genre>
                                                {(detail.genres || []).map
                                                    ((genre: any) => genre.name).join("/")}
                                            </S.Genre>
                                        ) : null}</S.Genres>
                                    </S.ModalInfo>
                                </S.ModalContianer>
                                <S.ModalClips bgPhoto={makeImagePath(
                                    detail?.backdrop_path
                                )}>
                                    <S.Video>
                                        <Trailer part={part} id={id} />
                                    </S.Video>
                                </S.ModalClips>
                            </S.ModalContianerWrap>
                            <S.ModalContianerWrap>
                                <S.ModalContainers>
                                    <S.OverviewTitle>Summary</S.OverviewTitle>
                                    <S.InfoOverview>{detail?.overview}</S.InfoOverview>
                                </S.ModalContainers>
                                {/* <S.ModalContainers>
                                    <S.OverviewTitle>Summary</S.OverviewTitle>
                                    <S.InfoOverview>{detail?.overview}</S.InfoOverview>
                                </S.ModalContainers> */}
                            </S.ModalContianerWrap>
                        </S.Wrap>
                    </>
                ) : null}
            </AnimatePresence>
        </>
    )
};

export default Modal;
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
import { LeftContainer } from "./modalTop/leftContainter";
import { RightContainer } from "./modalTop/rightConatiner";
import { ModalTop } from "./modalTop";
import { Title } from "./title";
import { CastContainer } from "./modalBottom/castContainer";
import { Recommend } from "./modalBottom/movieContainer/recommend";
import { MovieContainer } from "./modalBottom/movieContainer";
import { ModalBottom } from "./modalBottom";

interface IModal {
    recommend?: IGetRecommends;
    detail: IGetDetail;
    cast: ICast[];
}

function Detail({ detail, recommend, cast }: IModal) {
    const modalMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const part = modalMatch?.params.part;
    const id = modalMatch?.params.id;

    return (
        <>
            <Helmet>
                <title>{detail?.title || detail?.name}</title>
            </Helmet>
            {modalMatch ? (
                <>
                    <S.Wrap>
                        <S.WrapImage bgPhoto={makeImagePath(detail?.backdrop_path)}></S.WrapImage>
                        <ModalTop detail={detail} cast={cast} part={part} id={id} />
                        <ModalBottom cast={cast} recommend={recommend} part={part} id={id}/>
                        <S.Doc>2023 choi138.tk, All rights reserved.</S.Doc>
                    </S.Wrap>
                </>
            ) : null}
        </>
    )
};

export default Detail;
import { useEffect, useState } from "react";
import { ICast, IGetDetail } from "../../../Api/api";
import { Title } from "../title";
import { Clip } from "./clip"
import { LeftContainer } from "./leftContainter"
import { RightContainer } from "./rightConatiner";
import * as S from "./style"

interface ModalTopProps {
    detail: IGetDetail;
    cast: ICast[];
    part?: string;
    id?: string;
}

export const ModalTop: React.FC<ModalTopProps> = ({ detail, cast, part, id }) => {

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
            <S.ModalTop>
                <Clip detail={detail} part={part} id={id} />
                <LeftContainer detail={detail} part={part} />
                {windowDimension.winWidth >= 500 && (
                    <RightContainer detail={detail} cast={cast} part={part} />
                )}
            </S.ModalTop>
            <S.SumDiv>
                <Title title="Summary" />
                <S.InfoOverview>{detail?.overview}</S.InfoOverview>
            </S.SumDiv>
        </>
    )
}
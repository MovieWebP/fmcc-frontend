import { IGetDetail } from "../../../../../Api/api";
import * as S from "./style";

interface InfoProps {
    detail: IGetDetail;
    part?: string;
}

export const Info: React.FC<InfoProps> = ({ detail, part }) => {
    return (
        <>
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
        </>
    )
}
import { ICast, IGetDetail } from "../../../../Api/api";
import { Info } from "./info";
import * as S from "./style";

interface RightContainerProps {
    detail: IGetDetail;
    cast: ICast[];
    part?: string;
}

export const RightContainer: React.FC<RightContainerProps> = ({ detail, cast, part }) => {
    return (
        <>
            <S.RightContainer>
                <S.OverviewTitle>Info</S.OverviewTitle>
                <Info detail={detail} cast={cast} part={part} name="Title" />
                <Info detail={detail} cast={cast} part={part} name="Cast" />
                <Info detail={detail} cast={cast} part={part} name="Genres" />
                <Info detail={detail} cast={cast} part={part} name="Rating" />
            </S.RightContainer>
        </>
    )
}
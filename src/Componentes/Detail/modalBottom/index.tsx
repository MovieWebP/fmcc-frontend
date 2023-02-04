import { ICast, IGetRecommends } from "../../../Api/api";
import { CastContainer } from "./castContainer";
import { MovieContainer } from "./movieContainer";
import * as S from "./style";

interface ModalBottomProps {
    cast: ICast[];
    recommend?: IGetRecommends;
    part?: string;
    id?: string;
}

export const ModalBottom:React.FC<ModalBottomProps> = ({cast, recommend, part, id}) => {
    return (
        <>
            <S.ModalBottom>
                <CastContainer cast={cast} />
                <MovieContainer recommend={recommend} part={part} id={id} />
            </S.ModalBottom>
        </>
    )
}
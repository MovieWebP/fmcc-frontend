import { ICast } from "../../../../Api/api";
import { Title } from "../../title"
import {  Cast } from "./cast";
import * as S from "./style"

interface CastContainerProps {
    cast: ICast[];
}

export const CastContainer: React.FC<CastContainerProps> = ({ cast }) => {

    const castes = cast.slice(0, 6);

    return (
        <>
            <S.CastContainer>
                {cast ? (
                    <>
                        <Title title="Cast" />
                        <Cast cast={castes} />
                    </>
                ) : (
                    <>
                        <Title title="No Castes" />
                    </>
                )}
            </S.CastContainer>
        </>
    )
}
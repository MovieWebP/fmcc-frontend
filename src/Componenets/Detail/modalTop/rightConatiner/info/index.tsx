import { Rating } from "react-simple-star-rating";
import { ICast, IGetDetail } from "../../../../../Api/api";
import * as S from "./style";

interface InfoProps {
    detail: IGetDetail;
    cast: ICast[];
    part?: string;
    name: string;
}

export const Info: React.FC<InfoProps> = ({ detail, cast, part, name }) => {
    return (
        <>
            <S.Overview>
                <S.InfoName>{name}:</S.InfoName> {/* Title, Cast, Genres, Rating  */}
                {name === "Title" && (
                    <>
                        <S.InfoMovieName>{part === "movie" ? detail?.title : detail?.name}</S.InfoMovieName>
                    </>
                )}
                {name === "Cast" && (
                    <>
                        <S.InfoMovieName>{cast.slice(0, 4).map
                            ((casts: any) => casts.name).join(", ")}
                        </S.InfoMovieName>
                    </>
                )}
                {name === "Genres" && (
                    <>
                        <S.InfoMovieName>{detail?.genres?.length ? (
                            <S.InfoMovieName>
                                {(detail.genres || []).map
                                    ((genre: any) => genre.name).join(", ")}
                            </S.InfoMovieName>
                        ) : null}</S.InfoMovieName>
                    </>
                )}
                {name === "Rating" && (
                    <>
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
                    </>
                )}
            </S.Overview>
        </>
    )
}
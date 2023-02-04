import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import { getDetail, getRecommend, getCast, IGetCredits } from "../../Api/api";
import Detail from "../../Componentes/Detail/Detail";
import * as S from "../Style";


function Movies() {
    const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const id = bigMovieMatch?.params.id;
    const part = bigMovieMatch?.params.part;

    // Api
    const { data: detail, isLoading: DetailLoading } = useQuery(["movie", id], () =>
        getDetail(part, id || "")
    );
    const { data: recommend, isLoading: RecommendLoading } = useQuery(["recommend", id], () =>
        getRecommend(part, id || "")
    );
    const { data: cast, isLoading: CastLoading } = useQuery<IGetCredits>(["cast", id], () =>
        getCast(part, id || "")
    );

    const isLoading = DetailLoading || RecommendLoading || CastLoading || false

    return (
        <>
            {isLoading ? (
                <><S.Loading>Loading...</S.Loading></>
            ) : (
                <>
                    <Detail
                        detail={detail ?? []}
                        recommend={recommend ?? []}
                        cast={cast?.cast ?? []}
                    />
                </>
            )}
        </>
    )
}

export default Movies;
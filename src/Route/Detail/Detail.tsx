import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import { getDetail, getRecommend, getCast, IGetCredits } from "../../Api/api";
import Detail from "../../Componenets/Detail/Detail";


function Movies() {
    const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const id = bigMovieMatch?.params.id;
    const part = bigMovieMatch?.params.part;

    // Api
    const { data: detail } = useQuery(["movie", id], () =>
        getDetail(part, id || "")
    );
    const { data: recommend } = useQuery(["recommend", id], () =>
        getRecommend(part, id || "")
    );
    const { data: cast } = useQuery<IGetCredits>(["cast", id], () =>
        getCast(part, id || "")
    );

    return (
        <>
            <Detail
                detail={detail ?? []}
                recommend={recommend ?? []}
                cast={cast?.cast ?? []}
            />
            <p style={{ "textAlign": "center" }}>© 2022-2023 by choi138.tk, Inc.</p>

        </>
    )
}

export default Movies;
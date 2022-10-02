import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import { getDetail, getClips, getRecommend, getCast, IGetCredits } from "../../Api/api";
import Modal from "../../Componenets/Modal/Modal";


function Components() {
    const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const id = bigMovieMatch?.params.id;
    const part = bigMovieMatch?.params.part;

    // Api
    const { data: detail } = useQuery(["movie", id], () => // movieDetail은 getDetail의 data를 받아온다.
        getDetail(part, id || "")
    );
    const { data: clips } = useQuery(["clips", id], () =>
        getClips(part, id || "")
    );
    const { data: recommend } = useQuery(["recommend", id], () =>
        getRecommend(part, id || "")
    );
    const { data: cast } = useQuery<IGetCredits>(["cast", id], () =>
        getCast(part, id || "")
    );

    const clipsData = clips?.results?.slice(-3).reverse();
    return (
        <Modal
            detail={detail ?? []} // detail은 getDetail의 data를 받아온다.
            recommend={recommend ?? []} // 
            cast={cast?.cast ?? []} // 
            clips={clipsData ?? []}
        />
    )
}

export default Components;
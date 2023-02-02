import { useQuery } from "react-query";
import { getMovie, MovieVideosProps } from "../../../Api/api";
import * as S from "../../Style";

function WatchNow() {
    const { data: video, isLoading: videoLoading } =
    useQuery<MovieVideosProps>(
        ["video", "movie"],
        getMovie,
        {
            refetchInterval: 50000
        }
    );
    console.log(video);

    return (
        <S.SearchSliderWrap>
            <S.Title>Can watch movie here </S.Title>
        </S.SearchSliderWrap>
    );
}

export default WatchNow;
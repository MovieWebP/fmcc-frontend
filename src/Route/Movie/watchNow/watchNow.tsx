import { useQuery } from "react-query";
import { getDetail, getMovie, IGetResults, MovieVideoProps, MovieVideosProps } from "../../../Api/api";
import { makeImagePath } from "../../../Api/utils";
import * as S from "./style";

function WatchNow() {
    const { data: video, isLoading: videoLoading } =
        useQuery<MovieVideosProps>(
            ["video", "movie"],
            getMovie,
            {
                refetchInterval: 50000
            }
        );
    const id = video?.results.map((video: MovieVideoProps)  => (
        video.movieId.toString()
    ))

    return (
        <S.SearchSliderWrap>
            <S.Title>Watch Now </S.Title>
            <S.Wrap>
                {video?.results.map((video: MovieVideoProps) => (
                    <>
                        <S.BoxWrap>
                            {/* <S.Image src={makeImagePath(video.backdrop_path)}/> */}
                            <h3>{video.title}</h3>
                        </S.BoxWrap>
                    </>
                ))}

            </S.Wrap>
        </S.SearchSliderWrap>
    );
}

export default WatchNow;
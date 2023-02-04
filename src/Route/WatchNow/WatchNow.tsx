import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getVideo, MovieVideoProps, MovieVideosProps } from "../../Api/api";
import { makeImagePath } from "../../Api/utils";
import * as S from "./styled";
import { MdPlayArrow } from "react-icons/md";
import { Helmet } from "react-helmet";

function WatchNow() {
    const { part } = useParams();
    const { data: video, isLoading: videoLoading } =
        useQuery<MovieVideosProps>(
            ["video", "movie"],
            getVideo,
            {
                refetchInterval: 50000
            }
        );

    const navigate = useNavigate();

    const boxClick = (
        id: number) => {
        navigate(`/watch-now/${part}/${id}`);
    };
    // const boxClick = (part: string, id: number, sliderId: string) => {
    //     navigate(`/${part}/${sliderId}/${id}`);
    //     setModalActive(true);
    // };

    return (
        <>
            <Helmet>
                <title>Watch Now</title>
            </Helmet>
            <S.SearchSliderWrap>
                <S.Title>Watch Now </S.Title>
                <S.Wrap>
                    {video?.results.map((video: MovieVideoProps) => (
                        <>
                            <S.BoxWrap>
                                <S.PlayIcon />
                                <S.VideoWrap>
                                    <S.Image src={makeImagePath(video.backdrop_path)} onClick={() => boxClick(video.movieId)} />
                                    <S.MovieTitle>{video.title}</S.MovieTitle>
                                </S.VideoWrap>
                            </S.BoxWrap>
                        </>
                    ))}

                </S.Wrap>
            </S.SearchSliderWrap>
        </>
    );
}

export default WatchNow;
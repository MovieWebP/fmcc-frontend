import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { PathMatch, useMatch, useParams } from "react-router-dom";
import { getVideo, VideoProps, VideosProps } from "../../Api/api";
import { Loading } from "../Style";
import * as S from "./VideoStyle";

function Video() {
    const modalMatch: PathMatch<string> | null = useMatch("/watch-now/:part/:id");
    const id = modalMatch?.params.id;
    const { data: video, isLoading: videoLoading } =
        useQuery<VideosProps>(
            ["video", "movie"],
            getVideo,
            {
                refetchInterval: 50000
            }
        );

    return (
        <>
            <Helmet>
                <title>Video</title>
            </Helmet>
            {videoLoading ? (
                <>
                    <Loading>Loading...</Loading>
                </>
            ) : (
                <S.Wrap>
                    {video?.results.filter(
                        (video: VideoProps) => video.movieId.toString() === id
                    ).map((video: VideoProps) => (
                        <>
                            <S.Title>{video.title}</S.Title>
                            <S.VideoWrap>
                                <ReactPlayer
                                    url={`${video?.url}`}
                                    playing={false}
                                    controls
                                    width="100%"
                                    height="100%"
                                />
                            </S.VideoWrap>
                        </>
                    ))}
                </S.Wrap>
            )}
        </>
    )
}

export default Video;
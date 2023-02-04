import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { PathMatch, useMatch, useParams } from "react-router-dom";
import { getVideo, VideoProps, VideosProps } from "../../Api/api";
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
                                width="60rem"
                                height="40rem"
                            />
                        </S.VideoWrap>
                    </>
                ))}
            </S.Wrap>
        </>
    )
}

export default Video;
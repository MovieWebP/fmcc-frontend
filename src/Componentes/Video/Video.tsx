import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { PathMatch, useMatch, useParams } from "react-router-dom";
import { getVideo, MovieVideoProps, MovieVideosProps } from "../../Api/api";
import * as S from "./VideoStyle";

function Video() {
    const modalMatch: PathMatch<string> | null = useMatch("/watch-now/:part/:id");
    const id = modalMatch?.params.id;
    const { data: video, isLoading: videoLoading } =
        useQuery<MovieVideosProps>(
            ["video", "movie"],
            getVideo,
            {
                refetchInterval: 50000
            }
        );

    console.log(id);
    return (
        <>
            <S.Wrap>

                {video?.results.filter(
                    (video: MovieVideoProps) => video.movieId.toString() === id
                ).map((video: MovieVideoProps) => (
                    <>
                        <S.Title>{video.title}</S.Title>
                        <ReactPlayer
                            url={`${video?.url}`}
                            playing={false}
                            controls
                            width="60rem"
                            height="40rem"
                        />
                    </>
                ))}
            </S.Wrap>
        </>
    )
}

export default Video;
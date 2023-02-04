import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getVideo, VideoProps, VideosProps } from "../../Api/api";
import * as S from "./WatchNowStyled";
import { Helmet } from "react-helmet";
import { Loading } from "../Style";
import { Container } from "./contianer";

function WatchNow() {
    const { part } = useParams();
    const { data: video, isLoading: IsLoading } =
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
                <title>Watch Now</title>
            </Helmet>
            {IsLoading ? (
                <>
                    <Loading>Loading...</Loading>
                </>
            ) : (
                <>

                    <S.SearchSliderWrap>
                        <S.Title>Watch Now </S.Title>
                        <S.Wrap>
                            <Container videos={video?.results || []} part={part} />
                        </S.Wrap>
                    </S.SearchSliderWrap>
                </>
            )
            }
        </>
    );
}

export default WatchNow;
import { useNavigate } from "react-router-dom";
import { VideoProps } from "../../../Api/api";
import { makeImagePath } from "../../../Api/utils";
import * as S from "./styled";

interface ContainerProps {
    videos: VideoProps[];
    part?: string;
}

export const Container: React.FC<ContainerProps> = ({ videos, part }) => {
    const navigate = useNavigate();

    const boxClick = (
        id: number) => {
        navigate(`/watch-now/${part}/${id}`);
    };
    return (
        <>
            {videos.map((video) => (
                <>
                    <S.BoxWrap>
                        <S.PlayIcon onClick={() => boxClick(video.movieId)} />
                        <S.VideoWrap>
                            <S.Image src={makeImagePath(video.backdrop_path)} onClick={() => boxClick(video.movieId)} />
                            <S.MovieTitle>{video.title}</S.MovieTitle>
                        </S.VideoWrap>
                    </S.BoxWrap>
                </>
            ))}
        </>
    )
}
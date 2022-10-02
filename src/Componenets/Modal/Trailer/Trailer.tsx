import { useEffect, useState } from "react";
import { getTrailer } from "../../../Api/api";
import { VolumeOff, VolumeUp } from "@mui/icons-material";
import * as S from "./TrailerStyle";

interface ITrailer {
    id?: string;
    part?: string;
};

interface IVideo {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
};

function Trailer({ id, part }: ITrailer) {
    const [volume, setVolume] = useState(false);
    const [videoKey, setVideoKey] = useState("");
    useEffect(() => {
        (async () => {
            const { results } = await getTrailer(part, id);
            const trailer = results.filter(
                (video: IVideo) => video.type === "Trailer"
            );
            const random = trailer[Math.ceil(Math.random() * trailer.length - 1)];
            const videoKey = random?.key;
            setVideoKey(videoKey);
        })();
    }, [id]);

    const handleVolume = () => {
        setVolume(!volume);
    };

    return (
        <>
            {videoKey ? (
                <S.Wrapper>
                    <S.Player
                        url={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&rel=0`}
                        muted={volume ? true : false}
                        playing={true}
                        controls={false}
                        frameBorder="0"
                        style={{ borderRadius: "10px", width: "100%", height: "100%", position: "relative" }}
                        width="100%"
                        height="100%"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                    {volume ? (
                        <S.VolumDiv><S.Volum as={VolumeOff} onClick={handleVolume} /></S.VolumDiv>
                    ) : (
                        <S.VolumDiv><S.Volum as={VolumeUp} onClick={handleVolume} /></S.VolumDiv>
                    )}
                    <S.ModalTitle />
                </S.Wrapper>
            ) : null}
        </>
    )
}

export default Trailer
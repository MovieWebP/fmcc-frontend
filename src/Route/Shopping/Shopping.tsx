import { useEffect, useState } from 'react'
import * as S from "../Style";
import ReactHlsPlayer from 'react-hls-player';
import ReactPlayer from "react-player";
import axios from "axios";
import { useQuery } from "react-query";
// import {form} from "../../../videos/movie/jeungei/jeungei.m3u8"

interface GetMovieProps {
    url: string
    title: string
}

interface GetMoviesProps {
    movies: [GetMovieProps]
}

function Shopping() {
    const [videos, setVideos] = useState<GetMovieProps[]>([])
    const getMovies = async () => {
        const json = await (await fetch(`http://localhost:3005/videos`
        )).json();
        console.log(json.videos)
        setVideos(json.videos)
    }
    useEffect(() => {
        getMovies()
    }, [])
    // ./src/Route/Shopping/videos
    return (
        <S.SearchSliderWrap>
            <S.Title>See you soon! </S.Title>
            {videos.filter((video) => video.title === "jeungei").map((video) => (
            <ReactPlayer
                url={`${video?.url}`}
                // url="http://localhost:3005/video/movie/intern/intern.m3u8"
                playing={false}
                controls
                width="60rem"
                height="40rem"
            />
                ))}
            
        </S.SearchSliderWrap>
    )
}

export default Shopping
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
    // const [movies, setMovies] = useState<GetMovieProps[]>([])
    // const getMovies = async () => {
    //     const json = await (await fetch(`http://localhost:3003/movies/all`
    //     )).json();
    //     // console.log(json.movies)
    //     setMovies(json.movies)
    // }
    // useEffect(() => {
    //     getMovies()
    // }, [])
    // ./src/Route/Shopping/videos
    return (
        <S.SearchSliderWrap>
            <S.Title>See you soon! </S.Title>
            {movies.map((movie) => (
                <ReactPlayer
                    // url={`${movie?.url}`}
                    url="./videos/jeungei/jeungei.m3u8" 
                    // to fix this 431 error is to add a cors proxy to the url or to use a different url 
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
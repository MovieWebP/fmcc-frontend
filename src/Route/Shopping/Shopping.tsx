import React, { useEffect, useState } from "react";
import * as S from "../Style";
import ReactHlsPlayer from 'react-hls-player';
import ReactPlayer from "react-player";
import axios from "axios";
import { useQuery } from "react-query";

interface GetMovieProps {
    url: string
    title: string
}

interface GetMoviesProps {
    movies: [GetMovieProps]
}

function Shopping() {
    const [movies, setMovies] = useState<GetMovieProps[]>([])
    const getMovies = async () => {
        const json = await (await fetch(`http://localhost:3003/movies/all`
        )).json();
        console.log(json.movies)
        setMovies(json.movies)
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <S.SearchSliderWrap>
            <S.Title>See you soon! </S.Title>
            {movies.map((movie) => (
                <ReactPlayer
                    // url={`${movie?.url}`}
                    url="http://localhost:8000/videos/movie/jeungei/jeungei.m3u8"
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
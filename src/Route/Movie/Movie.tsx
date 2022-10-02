import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import Slider from "../../Componenets/Slider/Slider";
import { getAiringTodayTv, getClips, getDetail, getNowPlayingMovie, getOnTheAirTv, getPopularMovie, getPopularTv, getTopRatedMovie, getTopRatedTv, getUpcomingMovie, IGetCredits, IGetMovieResults, getRecommend, getCast } from "../../Api/api";
import Banner from "../../Componenets/Banner/Banner";
import Modal from "../../Componenets/Modal/Modal";
import * as S from "../Style";

function Movie() {
    const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const id = bigMovieMatch?.params.id;
    const part = bigMovieMatch?.params.part;

    // Movie
    const { data: nowPlaying, isLoading: playingLoading } =
        useQuery<IGetMovieResults>(["nowPlaying", "movie"], getNowPlayingMovie);
    const { data: popular, isLoading: popularLoading } =
        useQuery<IGetMovieResults>(["popular", "movie"], getPopularMovie);
    const { data: upComing, isLoading: upComingLoading } =
        useQuery<IGetMovieResults>(["upComing", "movie"], getUpcomingMovie);
    const { data: topRated, isLoading: topRatedLoading } =
        useQuery<IGetMovieResults>(["topRated", "movie"], getTopRatedMovie);

    // Api
    const { data: detail } = useQuery(["detail", id], () => getDetail(part, id || ""));
    const { data: clips } = useQuery(["clips", id], () => getClips(part, id || ""));
    const { data: recommend } = useQuery(["recommend", id], () => getRecommend(part, id || ""));
    const { data: cast } = useQuery<IGetCredits>(["cast", id], () => getCast(part, id || ""));

    const clipsData = clips?.results?.slice(-3).reverse();
    const isLoading = playingLoading || popularLoading || upComingLoading || topRatedLoading || false;

    return (
        <>
            <Helmet>
                <title>Movies</title>
            </Helmet >
            {isLoading ? (
                <div>loading</div>
            ) : (
                <>
                    <Banner
                        id="banner"
                        part="movie"
                        movies={nowPlaying?.results || []}
                    // movies={trendingData}
                    />
                    <S.SliderWrap>
                        <S.SliderTitle to="/movie">Movie</S.SliderTitle>
                        <Slider
                            id="nowPlaying"
                            part="movie"
                            title="Now Playing"
                            query="nowPlaying"
                            movies={nowPlaying?.results || []}
                        />
                        <Slider
                            id="popular"
                            part="movie"
                            title="Popular"
                            query="popular"
                            movies={popular?.results || []}
                        />
                        <Slider
                            id="upComing"
                            part="movie"
                            title="Up Coming"
                            query="upComing"
                            movies={upComing?.results || []}
                        />
                        <Slider
                            id="topRated"
                            part="movie"
                            title="Top Rated"
                            query="topRated"
                            movies={topRated?.results || []}
                        />
                    </S.SliderWrap>
                    <Modal
                        detail={detail ?? []} // movieDetail은 getDetail의 data를 받아온다.
                        recommend={recommend ?? []} // movieClips은 getClip의 data를 받아온다.
                        cast={cast?.cast ?? []} // movieCredits은 getMovieCredits의 data를 받아온다.
                        clips={clips ?? []}
                    />
                </>
            )}
        </>
    );
}

export default Movie;
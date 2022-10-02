import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import Slider from "../../Componenets/Slider/Slider";
import { getAiringTodayTv, getClips, getDetail, getNowPlayingMovie, getOnTheAirTv, getPopularMovie, getPopularTv, getTopRatedMovie, getTopRatedTv, getUpcomingMovie, IGetCredits, IGetMovieResults, getRecommend, getCast } from "../../Api/api";
import Banner from "../../Componenets/Banner/Banner";
import * as S from "../Style";
import Modal from "../../Componenets/Modal/Modal";

function Home() {

    // Movie
    const { data: nowPlaying, isLoading: playingLoading } =
        useQuery<IGetMovieResults>(["nowPlaying", "movie"], getNowPlayingMovie);
    const { data: popular, isLoading: popularLoading } =
        useQuery<IGetMovieResults>(["popular", "movie"], getPopularMovie);
    const { data: upComing, isLoading: upComingLoading } =
        useQuery<IGetMovieResults>(["upComing", "movie"], getUpcomingMovie);
    const { data: topRated, isLoading: topRatedLoading } =
        useQuery<IGetMovieResults>(["topRated", "movie"], getTopRatedMovie);

    //Tv
    const { data: airingToday, isLoading: AiringTodayLoading } =
        useQuery<IGetMovieResults>(["airingToday", "tv"], getAiringTodayTv);
    const { data: onTheAir, isLoading: onTheAirTvLoading } =
        useQuery<IGetMovieResults>(["onTheAirTv", "tv"], getOnTheAirTv);
    const { data: popularTv, isLoading: popularTvLoading } =
        useQuery<IGetMovieResults>(["popularTv", "tv"], getPopularTv);
    const { data: topRatedTv, isLoading: topRatedTvLoading } =
        useQuery<IGetMovieResults>(["topRatedTv", "tv"], getTopRatedTv);


    const isLoading = playingLoading || popularLoading || upComingLoading || topRatedLoading || AiringTodayLoading || onTheAirTvLoading || popularTvLoading || topRatedTvLoading || false;

    return (
        <>
            <Helmet>
                <title>Home</title>
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
                    </S.SliderWrap>
                    <S.SliderWrap>
                        <S.SliderTitle to="/tv">TV Shows</S.SliderTitle>
                        <Slider
                            id="airingToday"
                            part="tv"
                            title="Now Playing"
                            query="airingToday"
                            movies={airingToday?.results || []}
                        />
                        <Slider
                            id="onTheAir"
                            part="tv"
                            title="On The Air"
                            query="onTheAir"
                            movies={onTheAir?.results || []}
                        />
                        <Slider
                            id="popularTv"
                            part="tv"
                            title="Popular Tv"
                            query="popularTv"
                            movies={popularTv?.results || []}
                        />
                    </S.SliderWrap>
                </>
            )}
        </>
    );
}

export default Home;
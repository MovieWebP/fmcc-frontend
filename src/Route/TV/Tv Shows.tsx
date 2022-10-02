import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import Slider from "../../Componenets/Slider/Slider";
import Banner from "../../Componenets/Banner/Banner";
import { getAiringTodayTv, getClips, getDetail, getNowPlayingMovie, getOnTheAirTv, getPopularMovie, getPopularTv, getTopRatedMovie, getTopRatedTv, getUpcomingMovie, IGetCredits, IGetMovieResults, getRecommend, getCast } from "../../Api/api";
import Modal from "../../Componenets/Modal/Modal";
import * as S from "../Style";

function TV() {
    const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const id = bigMovieMatch?.params.id;
    const part = bigMovieMatch?.params.part;

    //Tv
    const { data: airingToday, isLoading: AiringTodayLoading } =
        useQuery<IGetMovieResults>(["airingToday", "tv"], getAiringTodayTv);
    const { data: onTheAir, isLoading: onTheAirTvLoading } =
        useQuery<IGetMovieResults>(["onTheAirTv", "tv"], getOnTheAirTv);
    const { data: popularTv, isLoading: popularTvLoading } =
        useQuery<IGetMovieResults>(["popularTv", "tv"], getPopularTv);
    const { data: topRatedTv, isLoading: topRatedTvLoading } =
        useQuery<IGetMovieResults>(["topRatedTv", "tv"], getTopRatedTv);

    // Api
    const { data: detail } = useQuery(["detail", id], () => getDetail(part, id || ""));
    const { data: clips } = useQuery(["clips", id], () => getClips(part, id || ""));
    const { data: recommend } = useQuery(["recommend", id], () => getRecommend(part, id || ""));
    const { data: cast } = useQuery<IGetCredits>(["cast", id], () => getCast(part, id || ""));

    const clipsData = clips?.results?.slice(-3).reverse();
    const isLoading = AiringTodayLoading || onTheAirTvLoading || popularTvLoading || topRatedTvLoading || false;

    return (
        <>
            <Helmet>
                <title>Tv Shows</title>
            </Helmet >
            {isLoading ? (
                <div>loading</div>
            ) : (
                <>
                    <Banner
                        id="banner"
                        part="tv"
                        movies={airingToday?.results || []}
                    />
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
                        <Slider
                            id="topRatedTv"
                            part="tv"
                            title="Top Rated Tv"
                            query="topRatedTv"
                            movies={topRatedTv?.results || []}
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

export default TV;
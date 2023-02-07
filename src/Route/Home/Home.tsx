
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import Slide from "../../Componentes/Slider/Slide";
import { getAiringTodayTv, getNowPlayingMovie, getOnTheAirTv, getPopularMovie, getPopularTv, getUpcomingMovie, IGetResults } from "../../Api/api";
import Banner from "../../Componentes/Banner/Banner";
import * as S from "../Style";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

function Home() {

    // Movie
    const { data: nowPlaying, isLoading: playingLoading } =
        useQuery<IGetResults>(
            ["nowPlaying", "movie"],
            getNowPlayingMovie,
            {
                refetchInterval: 50000
            }
        );
    const { data: popular, isLoading: popularLoading } =
        useQuery<IGetResults>(
            ["popular", "movie"],
            getPopularMovie,
            {
                refetchInterval: 50000
            }
        );

    //Tv
    const { data: airingToday, isLoading: AiringTodayLoading } =
        useQuery<IGetResults>(
            ["airingToday", "tv"],
            getAiringTodayTv,
            {
                refetchInterval: 50000
            }
        );

    const { data: popularTv, isLoading: popularTvLoading } =
        useQuery<IGetResults>(
            ["popularTv", "tv"],
            getPopularTv,
            {
                refetchInterval: 50000
            }
        );


    const isLoading = playingLoading || popularLoading || AiringTodayLoading || popularTvLoading || false;

    const [windowDimension, detectHW] = useState({ winWidth: window.innerWidth })

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension]);


    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet >
            {isLoading ? (
                <><S.Loading>Loading...</S.Loading></>
            ) : (
                <>
                    <Banner
                        id="banner"
                        part="movie"
                        movies={nowPlaying?.results || []}
                    />
                    <S.SliderWrap>
                        <Slide
                            id="nowPlaying"
                            part="movie"
                            title="Movie"
                            query="nowPlaying"
                            movies={nowPlaying?.results || []}

                        />
                        <Slide
                            id="popular"
                            part="movie"
                            query="popular"
                            movies={popular?.results || []}
                        />
                    </S.SliderWrap>
                    <S.SliderWrap>
                        <Slide
                            id="popularTv"
                            part="tv"
                            title="TV Shows"
                            query="popularTv"
                            movies={popularTv?.results || []}
                        />
                        <Slide
                            id="airingToday"
                            part="tv"
                            query="airingToday"
                            movies={airingToday?.results || []}
                        />
                    </S.SliderWrap>
                    <S.Doc>2022 choi138.tk, All rights reserved.</S.Doc>
                </>
            )}
        </>
    );
}

export default Home;
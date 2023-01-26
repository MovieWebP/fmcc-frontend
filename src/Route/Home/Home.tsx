
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import Slide from "../../Componenets/Slider/Slide";
import { getAiringTodayTv, getNowPlayingMovie, getOnTheAirTv, getPopularMovie, getPopularTv, getUpcomingMovie, IGetResults } from "../../Api/api";
import Banner from "../../Componenets/Banner/Banner";
import * as S from "../Style";
import { useRecoilValue } from "recoil";

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
                        <S.SliderTitle>Movie</S.SliderTitle>
                        <Slide
                            id="nowPlaying"
                            part="movie"
                            title="Now Playing"
                            query="nowPlaying"
                            movies={nowPlaying?.results || []}
                        />
                        <Slide
                            id="popular"
                            part="movie"
                            title="Popular"
                            query="popular"
                            movies={popular?.results || []}
                        />
                    </S.SliderWrap>
                    <S.SliderWrap>
                        <S.SliderTitle>TV Shows</S.SliderTitle>
                        <Slide
                            id="airingToday"
                            part="tv"
                            title="Now Playing"
                            query="airingToday"
                            movies={airingToday?.results || []}
                        />
                        <Slide
                            id="popularTv"
                            part="tv"
                            title="Popular Tv"
                            query="popularTv"
                            movies={popularTv?.results || []}
                        />
                    </S.SliderWrap>
                    <S.Doc>2022 choi138.tk, All rights reserved.</S.Doc>
                </>
            )}
        </>
    );
}

export default Home;
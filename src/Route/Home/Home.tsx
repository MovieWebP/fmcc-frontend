
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import Slider from "../../Componenets/Slider/Slider";
import { getAiringTodayTv, getNowPlayingMovie, getOnTheAirTv, getPopularMovie, getPopularTv, getUpcomingMovie, IGetResults } from "../../Api/api";
import Banner from "../../Componenets/Banner/Banner";
import * as S from "../Style";

function Home() {

    // Movie
    const { data: nowPlaying, isLoading: playingLoading } =
        useQuery<IGetResults>(["nowPlaying", "movie"], getNowPlayingMovie);
    const { data: popular, isLoading: popularLoading } =
        useQuery<IGetResults>(["popular", "movie"], getPopularMovie);
    const { data: upComing, isLoading: upComingLoading } =
        useQuery<IGetResults>(["upComing", "movie"], getUpcomingMovie);

    //Tv
    const { data: airingToday, isLoading: AiringTodayLoading } =
        useQuery<IGetResults>(["airingToday", "tv"], getAiringTodayTv);
    const { data: onTheAir, isLoading: onTheAirTvLoading } =
        useQuery<IGetResults>(["onTheAirTv", "tv"], getOnTheAirTv);
    const { data: popularTv, isLoading: popularTvLoading } =
        useQuery<IGetResults>(["popularTv", "tv"], getPopularTv);


    const isLoading = playingLoading || popularLoading || upComingLoading || AiringTodayLoading || onTheAirTvLoading || popularTvLoading || false;

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet >
            {isLoading ? (
                <S.SliderWrap>Loading...</S.SliderWrap>
            ) : (
                <>
                    <Banner
                        id="banner"
                        part="movie"
                        movies={nowPlaying?.results || []}
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
                    <p style={{ "textAlign": "center" }}>© 2022-2023 by choi138.tk, Inc.</p>
                </>
            )}
        </>
    );
}

export default Home;
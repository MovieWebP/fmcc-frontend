import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import Slider from "../../Componenets/Slider/Slide";
import { getNowPlayingMovie, getPopularMovie, getTopRatedMovie, getUpcomingMovie, IGetResults } from "../../Api/api";
import Banner from "../../Componenets/Banner/Banner";
import * as S from "../Style";

function Home() {

    // Movie
    const { data: nowPlaying, isLoading: playingLoading } =
        useQuery<IGetResults>(
            ["nowPlaying", "movie"],
            getNowPlayingMovie,
            {
                refetchInterval: 30000
            }
        );
    const { data: popular, isLoading: popularLoading } =
        useQuery<IGetResults>(
            ["popular", "movie"],
            getPopularMovie,
            {
                refetchInterval: 30000
            }
        );

    const { data: upComing, isLoading: upComingLoading } =
        useQuery<IGetResults>(
            ["upComing", "movie"],
            getUpcomingMovie,
            {
                refetchInterval: 30000
            }
        );

    const { data: topRated, isLoading: topRatedLoading } =
        useQuery<IGetResults>(
            ["topRated", "movie"],
            getTopRatedMovie,
            {
                refetchInterval: 30000
            }
        );


    const isLoading = playingLoading || popularLoading || upComingLoading || topRatedLoading || false;

    return (
        <>
            <Helmet>
                <title>Movie</title>
            </Helmet >
            {isLoading ? (
                <S.SearchSliderWrap>Loading...</S.SearchSliderWrap>
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
                        <Slider
                            id="topRated"
                            part="movie"
                            title="Top Rated"
                            query="topRated"
                            movies={topRated?.results || []}
                        />
                    </S.SliderWrap>
                    <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>
                </>
            )}
        </>
    );
}

export default Home;
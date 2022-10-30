import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import Slider from "../../Componenets/Slider/Slider";
import { getNowPlayingMovie, getPopularMovie, getTopRatedMovie, getUpcomingMovie, IGetResults } from "../../Api/api";
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
    const { data: topRated, isLoading: topRatedLoading } =
        useQuery<IGetResults>(["topRated", "movie"], getTopRatedMovie);


    const isLoading = playingLoading || popularLoading || upComingLoading || topRatedLoading || false;

    return (
        <>
            <Helmet>
                <title>Movie</title>
            </Helmet >
            {isLoading ? (
                <div>loading</div>
            ) : (
                <>
                    <Banner
                        id="banner"
                        part="movie"
                        movies={nowPlaying?.results || []}
                    />
                    <S.SliderWrap>
                        <S.SliderTitle to="/fm/movie">Movie</S.SliderTitle>
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
                </>
            )}
        </>
    );
}

export default Home;
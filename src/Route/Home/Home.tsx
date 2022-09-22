import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import { getNowPlayingMovie, getPopularMovie, getTopRatedMovie, getUpcomingMovie, IGetMovieResults } from "../../Api/api";
import Banner from "../../Componenets/Banner/Banner";

function Home() {
    const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const id = bigMovieMatch?.params.id;
    const part = bigMovieMatch?.params.part;

    const { data: nowPlaying, isLoading: playingLoading } =
        useQuery<IGetMovieResults>(["nowPlaying", "movie"], getNowPlayingMovie);

    const { data: popular, isLoading: popularLoading } =
        useQuery<IGetMovieResults>(["popular", "movie"], getPopularMovie);

    const { data: upComing, isLoading: upComingLoading } =
        useQuery<IGetMovieResults>(["topRated", "movie"], getUpcomingMovie);

    const { data: topRated, isLoading: topRatedLoading } =
        useQuery<IGetMovieResults>(["topRated", "movie"], getTopRatedMovie);

    return (
        <Helmet>
            <title>Home</title>
            <Banner />
        </Helmet >
    );
}

export default Home;
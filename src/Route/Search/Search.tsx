import { useQuery } from "react-query";
import { PathMatch, useLocation, useMatch } from "react-router-dom";
import { getFindMovie, IGetResults, getFindTv, getDetail, getRecommend, getCast, IGetCredits } from "../../Api/api";
import Slider from "../../Componenets/Slider/Slider";
import * as S from "../Style";

function Search() {
    const locatin = useLocation();
    const keyword = new URLSearchParams(locatin.search).get("keyword");

    // Find Movie
    const { data: movies, isLoading: isMovieLoading } =
        useQuery<IGetResults>([keyword, "movie"], () => getFindMovie(keyword));
    // Find Tv
    const { data: tv, isLoading: isTvLoading } =
        useQuery<IGetResults>([keyword, "tv"], () => getFindTv(keyword));

    const bigModalMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const id = bigModalMatch?.params.id;
    const part = bigModalMatch?.params.part;
    const sliderPart = bigModalMatch?.params.sliderPart;

    const { data: detail } = useQuery(["movie", id], () =>
        getDetail(part, id || "")
    );
    const { data: recommend } = useQuery(["recommend", id], () =>
        getRecommend(part, id || "")
    );
    const { data: cast } = useQuery<IGetCredits>(["cast", id], () =>
        getCast(part, id || "")
    );

    return (
        <S.SliderWrap>
            <S.SliderTitle to="/fm/movie">Movie</S.SliderTitle>
            <Slider
                id="searchMovie"
                movies={movies?.results ?? []}
                title="Search Movie"
                query="searchMovie"
                part="movie"
            ></Slider>
            <S.SliderTitle to="/fm/tv">TV Shows</S.SliderTitle>
            <Slider
                id="searchTv"
                movies={tv?.results ?? []}
                title="Search Tv"
                query="searchTv"
                part="tv"
            ></Slider>
        </S.SliderWrap>
    );
}

export default Search;
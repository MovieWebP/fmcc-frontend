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

    const isLoading = isMovieLoading || isTvLoading || false;

    return (
        <>
            {
                isLoading ? (
                    <S.SliderWrap>Searching...</S.SliderWrap>
                ) : (
                    <>
                        <S.SliderWrap>
                            <S.SliderTitle to="/movie">Movie</S.SliderTitle>
                            <Slider
                                id="searchMovie"
                                movies={movies?.results ?? []}
                                title="Search Movie"
                                query="searchMovie"
                                part="movie"
                            ></Slider>
                            <S.SliderTitle to="/tv">TV Shows</S.SliderTitle>
                            <Slider
                                id="searchTv"
                                movies={tv?.results ?? []}
                                title="Search Tv"
                                query="searchTv"
                                part="tv"
                            ></Slider>
                        </S.SliderWrap>
                        <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>
                    </>
                )
            }
        </>
    );
}

export default Search;
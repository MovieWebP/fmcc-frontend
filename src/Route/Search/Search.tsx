import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { PathMatch, useLocation, useMatch } from "react-router-dom";
import { getFindMovie, IGetResults, getFindTv, getDetail, getRecommend, getCast, IGetCredits } from "../../Api/api";
import Slider from "../../Componenets/Slider/Slide";
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
            <Helmet>
                <title>Search</title>
            </Helmet >
            {
                isLoading ? (
                    <S.SliderWrap>Searching...</S.SliderWrap>
                ) : (
                    <>
                        <S.SearchSliderWrap>
                            <S.SliderTitle>Movie</S.SliderTitle>
                            <Slider
                                id="searchMovie"
                                movies={movies?.results ?? []}
                                title="Search Movie"
                                query="searchMovie"
                                part="movie"
                            ></Slider>
                            <S.SliderTitle>TV Shows</S.SliderTitle>
                            <Slider
                                id="searchTv"
                                movies={tv?.results ?? []}
                                title="Search Tv"
                                query="searchTv"
                                part="tv"
                            ></Slider>
                        </S.SearchSliderWrap>
                        <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>
                    </>
                )
            }
        </>
    );
}

export default Search;
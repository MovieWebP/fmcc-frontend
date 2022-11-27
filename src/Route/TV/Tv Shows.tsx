import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import Slider from "../../Componenets/Slider/Slider";
import Banner from "../../Componenets/Banner/Banner";
import { getAiringTodayTv, getOnTheAirTv, getPopularTv, getTopRatedTv, IGetResults } from "../../Api/api";
import * as S from "../Style";

function TV() {

    //Tv
    const { data: airingToday, isLoading: AiringTodayLoading } =
        useQuery<IGetResults>(["airingToday", "tv"], getAiringTodayTv);
    const { data: onTheAir, isLoading: onTheAirTvLoading } =
        useQuery<IGetResults>(["onTheAirTv", "tv"], getOnTheAirTv);
    const { data: popularTv, isLoading: popularTvLoading } =
        useQuery<IGetResults>(["popularTv", "tv"], getPopularTv);
    const { data: topRatedTv, isLoading: topRatedTvLoading } =
        useQuery<IGetResults>(["topRatedTv", "tv"], getTopRatedTv);

    const isLoading = AiringTodayLoading || onTheAirTvLoading || popularTvLoading || topRatedTvLoading || false;

    return (
        <>
            <Helmet>
                <title>Tv Shows</title>
            </Helmet >
            {isLoading ? (
                <S.SliderWrap>Loading...</S.SliderWrap>
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
                    <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>
                </>
            )}
        </>
    );
}

export default TV;
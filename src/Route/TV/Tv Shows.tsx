import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import Slider from "../../Componenets/Slider/Slide";
import Banner from "../../Componenets/Banner/Banner";
import { getAiringTodayTv, getOnTheAirTv, getPopularTv, getTopRatedTv, IGetResults } from "../../Api/api";
import * as S from "../Style";

function TV() {

    //Tv
    const { data: airingToday, isLoading: AiringTodayLoading } =
        useQuery<IGetResults>(
            ["airingToday", "tv"],
            getAiringTodayTv,
            {
                refetchInterval: 50000
            }
        );
    const { data: onTheAir, isLoading: onTheAirTvLoading } =
        useQuery<IGetResults>(
            ["onTheAirTv", "tv"],
            getOnTheAirTv,
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
    const { data: topRatedTv, isLoading: topRatedTvLoading } =
        useQuery<IGetResults>(
            ["topRatedTv", "tv"],
            getTopRatedTv,
            {
                refetchInterval: 50000
            }
        );

    const isLoading = AiringTodayLoading || onTheAirTvLoading || popularTvLoading || topRatedTvLoading || false;

    return (
        <>
            <Helmet>
                <title>Tv Shows</title>
            </Helmet >
            {isLoading ? (
                <><S.Loading>Loading...</S.Loading></>
            ) : (
                <>
                    <Banner
                        id="banner"
                        part="tv"
                        movies={popularTv?.results || []}
                    />
                    <S.SliderWrap>
                        <S.SliderTitle>TV Shows</S.SliderTitle>
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
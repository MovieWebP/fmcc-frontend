import React from "react";
import { IGetRecommends } from "../../../../Api/api";
import { Title } from "../../title";
import { Recommend } from "./recommend";
import * as S from "./style";

interface MovieContainerProps {
    recommend?: IGetRecommends;
    part?: string;
    id?: string;
}

export const MovieContainer: React.FC<MovieContainerProps> = ({ recommend, part, id }) => {
    
    const recommends = recommend?.results?.slice(0, 6);
    return (
        <>
            <S.MovieContainers>
                {recommends ? (
                    <>
                        <Title title="Recommend" />
                        <Recommend recommend={recommend} part={part} id={id} />
                    </>
                ) : (
                    <>
                        <Title title="No Recommend" />
                    </>
                )}
            </S.MovieContainers>
        </>
    )
}
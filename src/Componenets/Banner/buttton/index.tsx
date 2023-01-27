import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMovie } from "../../../Api/api";
import { modalState } from "../../../atom";
import * as S from "./style";

interface ButtonProps {
    movie: IMovie;
    id: string;
    part: string;
}

export const Button: React.FC<ButtonProps> = ({ movie, id, part }) => {
    const [modalActive, SetModalActive] = useRecoilState(modalState);
    const navigate = useNavigate();
    const boxClick = (part: string, sliderId: string, id: number,) => {
        navigate(`/${part}/${sliderId}/${id}`);
        SetModalActive(true);
    }

    return (
        <S.Button onClick={() => boxClick(part, id, movie.id)}>
            <S.PlayIcon />
            <S.ButtonText>Watch Now</S.ButtonText>
        </S.Button>
    )
}
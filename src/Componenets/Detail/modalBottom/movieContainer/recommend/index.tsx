import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { IGetRecommends } from '../../../../../Api/api';
import { makeImagePath } from '../../../../../Api/utils';
import { modalState } from '../../../../../atom';
import * as S from './style';

interface RecommendProps {
    recommend?: IGetRecommends;
    part?: string;
    id?: string;
}

export const Recommend: React.FC<RecommendProps> = ({recommend, part, id}) => {

    const navigate = useNavigate();

    const [modalActive, setModalActive] = useRecoilState(modalState);

    const modalOpen = (
        part: string | undefined,
        id: number,
        sliderId: string | undefined
    ) => {
        setModalActive(true);
        navigate(`/${part}/${sliderId}/${id}`);
    };


    const recommends = recommend?.results?.slice(0, 6);

    return (
        <>
            <div>
                <S.RecommendWrap>
                    {recommends?.map((recommend: any) => (
                        <S.RecommendSlider>
                            <S.RecommendImg
                                src={makeImagePath(
                                    recommend.poster_path
                                )}
                            />
                            <S.RecommendTitle
                                key={recommend.id}
                                onClick={() =>
                                    modalOpen(part, recommend.id, id)
                                }
                            >{part === "movie" ? recommend?.title : recommend?.name}
                            </S.RecommendTitle>
                        </S.RecommendSlider>
                    ))}
                </S.RecommendWrap>
            </div>
        </>
    )
}
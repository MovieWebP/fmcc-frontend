import { useEffect, useState } from "react";
import { IMovie } from "../../../Api/api";
import * as S from "./style";

interface OverviewProps {
    movie: IMovie;
}

export const Overview: React.FC<OverviewProps> = ({ movie }) => {
    const [windowDimension, detectHW] = useState({ winWidth: window.innerWidth })

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension]);
    return (
        <>
            {
                windowDimension.winWidth <= 700 && windowDimension.winWidth > 500 ? (
                    <S.Overview>
                        {movie?.overview ? movie?.overview.slice(0, 75) + "..." : null}
                    </S.Overview>
                ) : (
                    <S.Overview>
                        {movie?.overview ? movie?.overview.slice(0, 90) + "..." : null}
                    </S.Overview>
                )
            }
        </>
    )
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMovie } from "../../Api/api";
import { modalState } from "../../atom";

interface IBanner {
    id: string;
    part: string;
    movies?: IMovie[];
}

function Banner({ part, id, movies }: IBanner) {
    const [movie, setMovie] = useState<IMovie>();
    useEffect(() => {
        if (movies) setMovie(movies[0]);
    }, [movies])
    const [isModalActive, setisModalActive] = useRecoilState(modalState);
    const navigate = useNavigate();
    const handleModal = (part: string, id: number, sliderId: string) => {
        navigate(`/${part}/${sliderId}/${id}`);
        setisModalActive(true)
    }
    return (
        <>
            {movie ? (
                <div>hello</div>
            ) : null}
        </>
    );
}

export default Banner;
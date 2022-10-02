import { ICast, IGetDetail, IGetRecommends } from "../../Api/api";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import * as S from "./ModalStyle"
import { modalState } from "../../atom";
import { useRecoilState } from "recoil";
import { AnimatePresence } from "framer-motion";

interface IModal {
    detail: IGetDetail;
    cast: ICast[];
    clips?: [string];
    recommend?: IGetRecommends;
}

function Modal({ detail, recommend, cast, clips }: IModal) {
    const modalMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const part = modalMatch?.params.part;
    const sliderPart = modalMatch?.params.sliderPart;
    const id = modalMatch?.params.id;

    const navigate = useNavigate();

    const [modalActive, setModalActive] = useRecoilState(modalState);

    const modalOpen = (
        part: string | undefined,
        sliderPart: string | undefined,
        id: number
    ) => {
        setModalActive(true);
        navigate(`/${part}/${sliderPart}/${id}`);
    };

    const modalClose = () => {
        setModalActive(false);
        navigate(-1);
        // navigate("/");
    };

    const recommends = recommend?.results?.slice(0, 3);

    return (
        <>
            <AnimatePresence>
                {modalMatch ? (
                    <>
                        <S.Wrap>
                            asdf
                        </S.Wrap>
                    </>
                ) : null}
            </AnimatePresence>
        </>
    )
};

export default Modal;
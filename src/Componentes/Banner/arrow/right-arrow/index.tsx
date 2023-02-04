import { MdKeyboardArrowRight } from "react-icons/md";
import * as S from "./style";

interface RightArrowProps {
    index: number;
    moveSlider: () => void;
}

export const RightArrow: React.FC<RightArrowProps> = ({ index, moveSlider }) => {
    return (
        <>
            {index === 4 ? (
                <S.ArrowBox onClick={moveSlider} style={{ "visibility": "hidden" }} >
                    <MdKeyboardArrowRight size="5rem" />
                </S.ArrowBox>
            ) : (
                <S.ArrowBox onClick={moveSlider} >
                    <MdKeyboardArrowRight size="5rem" />
                </S.ArrowBox>
            )}
        </>
    )
}
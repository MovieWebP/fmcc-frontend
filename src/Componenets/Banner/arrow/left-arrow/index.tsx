import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md"
import * as S from "./style"

interface LeftArrowProps {
    index: number;
    moveSliderPrev: () => void;
}

export const LeftArrow: React.FC<LeftArrowProps> = ({ index, moveSliderPrev }) => {
    return (
        <>
            {index === 0 ? (
                <S.ArrowBox onClick={moveSliderPrev} style={{ "visibility": "hidden" }}>
                    <MdKeyboardArrowLeft size="5rem" />
                </S.ArrowBox>
            ) : (
                <S.ArrowBox onClick={moveSliderPrev}>
                    <MdKeyboardArrowLeft size="5rem" />
                </S.ArrowBox>
            )}
        </>
    )
}
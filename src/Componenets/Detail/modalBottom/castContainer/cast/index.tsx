import { ICast } from "../../../../../Api/api"
import { makeImagePath } from "../../../../../Api/utils"
import * as S from "./style"

interface CastProps {
    cast: ICast[];

}

export const Cast: React.FC<CastProps> = ({cast}) => {
    return (
        <div>
            <S.CastWrap>
                {cast.map((casts: any) => (
                    <S.CastSlider>
                        <S.CastImageWrap>
                            <S.CastImg
                                src={makeImagePath(
                                    casts?.profile_path,
                                )}
                            />
                        </S.CastImageWrap>
                        <S.CastTitle>{casts?.name}</S.CastTitle>
                        <S.Character>{casts?.character}</S.Character>
                    </S.CastSlider>
                ))}
            </S.CastWrap>
        </div>
    )
}
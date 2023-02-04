import { IGetDetail } from "../../../../Api/api"
import { makeImagePath } from "../../../../Api/utils"
import Trailer from "../../Trailer"
import * as S from "./style"

interface ClipProps {
    detail: IGetDetail;
    part?: string;
    id?: string;
}

export const Clip: React.FC<ClipProps> = ({ detail, part, id }) => {
    return (
        <>
            <S.ModalClips bgPhoto={makeImagePath(
                detail?.backdrop_path
            )}>
                <S.Video>
                    <Trailer part={part} id={id} />
                </S.Video>
            </S.ModalClips>
        </>
    )
}
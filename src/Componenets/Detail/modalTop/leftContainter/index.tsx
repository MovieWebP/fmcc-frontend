import { IGetDetail } from '../../../../Api/api'
import { makeImagePath } from '../../../../Api/utils'
import { Info } from './info'
import * as S from './style'

interface ContainerProps {
    detail: IGetDetail;
    part?: string;
}

export const LeftContainer: React.FC<ContainerProps> = ({detail, part}) => {
    return (
        <>
            <S.LeftContianer>
                <S.ModalImage src={makeImagePath(detail?.poster_path)} />
                <Info detail={detail} part={part} />
            </S.LeftContianer>
        </>
    )
}
import * as S from "./style"

interface TitleProps {
    title: string;
}

export const Title: React.FC<TitleProps> = ({title}) => {
    return (
        <>
            <S.Title>{title}</S.Title>
        </>
    )
}
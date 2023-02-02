import { useForm } from "react-hook-form";
import * as S from "./style";

interface InputDivProps {
    name: string;
    url?: string;
}

export interface VideoProps {
    url: string;
    title: string;
    movieId: number;
}

export const InputDiv: React.FC<InputDivProps> = ({ name }) => {
    const { register } = useForm<any>({
        defaultValues: {
            url: "http://localhost:3005/video/movie/.m3u8",
        }
    });

    return (
        <>
            <S.UserDiv>
                <S.InputDiv>
                    <div>
                        <S.Username {...register(`${name}`, {
                            required: `${name} is required`,
                        })} placeholder={name} />
                    </div>
                </S.InputDiv>
            </S.UserDiv>
        </>
    )
}
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface IForm {
    keyword: string;
}

export const Search = () => {

    const { register, handleSubmit } = useForm<IForm>();
    const navigate = useNavigate();
    const onSearch = (data: IForm) => {
        navigate(`/search?keyword=${data.keyword}`);
    }

    return (
        <S.Menu2Wrap className="searchBarWrap">
            <S.Search onSubmit={handleSubmit(onSearch)}>
                <S.Input
                    {...register("keyword", { required: true, minLength: 2 })}
                    placeholder="Search"
                />
            </S.Search>
        {/* <S.LoginWrap>
                    <S.Login to="/login">Login</S.Login>
            </S.LoginWrap> */}
        </S.Menu2Wrap >
    )
}
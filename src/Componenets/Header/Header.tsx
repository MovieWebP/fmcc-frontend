import { useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as S from "./HeaderStyle";


interface IForm {
    keyword: string;
}

function Header() {
    const homeMatch = useMatch("");
    const movieMatch = useMatch("/movie");
    const tvMatch = useMatch("/tv");
    const shoppingMatch = useMatch("/shopping")

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<IForm>();
    const onSearch = (data: IForm) => {
        navigate(`/search?keyword=${data.keyword}`);
    }

    return (
        <>
            <S.NavBar expand="sm" variants="dark">
                <S.MenuWrap>
                    <S.Title href="/">FM</S.Title>
                    <S.NavTog ><S.TogIcon /></S.NavTog>
                    <S.NavBarCo id="basic-navbar-nav">
                        <S.MenuItems className="me-auto">
                            {homeMatch ? (
                                <S.MatchItemStyle href="/">Home</S.MatchItemStyle>
                            ) : (
                                <S.ItemStyle href="/">Home</S.ItemStyle>
                            )}

                            {movieMatch ? (
                                <S.MatchItemStyle href="/movie">Movie</S.MatchItemStyle>
                            ) : (
                                <S.ItemStyle href="/movie">Movie</S.ItemStyle>
                            )}

                            {tvMatch ? (
                                <S.MatchItemStyle href="/tv">TV Shows</S.MatchItemStyle>
                            ) : (
                                <S.ItemStyle href="/tv">TV Shows</S.ItemStyle>
                            )}

                            {shoppingMatch ? (
                                <S.MatchItemStyle href="/shopping">Shopping</S.MatchItemStyle>
                            ) : (
                                <S.ItemStyle href="/shopping">Shopping</S.ItemStyle>
                            )}
                        </S.MenuItems>
                    </S.NavBarCo>
                </S.MenuWrap>
                <S.Menu2Wrap>
                    <S.Search onSubmit={handleSubmit(onSearch)}>
                        <S.Input
                            {...register("keyword", { required: true, minLength: 2 })}
                            placeholder="Search"
                        />
                    </S.Search>
                    <S.LoginWrap>
                        <S.Login to="/login">Login</S.Login>
                    </S.LoginWrap>
                </S.Menu2Wrap >
            </S.NavBar >
        </>
    );
}

export default Header;
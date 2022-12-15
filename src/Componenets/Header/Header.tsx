import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useForm } from "react-hook-form";
import * as S from "./HeaderStyle";

interface IForm {
    keyword: string;
}

function Header() {
    const homeMatch = useMatch("");
    const movieMatch = useMatch("/movie");
    const tvMatch = useMatch("/tv");

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<IForm>();
    const onSearch = (data: IForm) => {
        setNavbar(false)
        navigate(`/search?keyword=${data.keyword}`);
    }

    const [navbar, setNavbar] = useState(false);

    const onClick = () => {
        // console.log(navbar)
        return setNavbar((props) => !props)
    }

    const MenuOnClick = () => {
        setNavbar(false)
    }
    return (
        <>
            {
                navbar ? (
                    <S.Nav>
                        <S.MenuWrap>
                            <S.LinkStyle to="/">
                                <S.Title>FM</S.Title>
                            </S.LinkStyle>
                            <S.MenuItems>
                                <S.MenuSpanDiv onClick={onClick}>
                                    <S.MenuSpan></S.MenuSpan>
                                    <S.MenuSpan></S.MenuSpan>
                                    <S.MenuSpan></S.MenuSpan>
                                </S.MenuSpanDiv>
                                <S.MenuItem>
                                    {homeMatch ? (
                                        <S.Match to="/" onClick={MenuOnClick}>
                                            Home
                                        </S.Match>
                                    ) : (
                                        <S.LinkStyle to="/" onClick={MenuOnClick}>
                                            Home
                                        </S.LinkStyle>
                                    )}
                                </S.MenuItem>
                                <S.MenuItem>
                                    {movieMatch ? (
                                        <S.Match to="/movie" onClick={MenuOnClick}>
                                            Movie
                                        </S.Match>
                                    ) : (
                                        <S.LinkStyle to="/movie" onClick={MenuOnClick}>
                                            Movie
                                        </S.LinkStyle>
                                    )}
                                </S.MenuItem>
                                <S.MenuItem>
                                    {tvMatch ? (
                                        <S.Match to="/tv" onClick={MenuOnClick}>
                                            TV Shows
                                        </S.Match>
                                    ) : (
                                        <S.LinkStyle to="/tv" onClick={MenuOnClick}>
                                            Tv Shows
                                        </S.LinkStyle>
                                    )}
                                </S.MenuItem>
                                <S.MenuItem>
                                    {tvMatch ? (
                                        <S.Match to="/shopping" onClick={MenuOnClick}>
                                            Shopping
                                        </S.Match>
                                    ) : (
                                        <S.LinkStyle to="/shopping" onClick={MenuOnClick}>
                                            Shopping
                                        </S.LinkStyle>
                                    )}
                                </S.MenuItem>
                            </S.MenuItems>
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
                        </S.Menu2Wrap>
                    </S.Nav >
                ) : (
                    <S.FalNav>
                        <S.FalMenuWrap>
                            <S.LinkStyle to="/">
                                <S.Title>FM</S.Title>
                            </S.LinkStyle>
                            <S.FalMenuItems>
                                <S.MenuSpanDiv onClick={onClick}>
                                    <S.MenuSpan></S.MenuSpan>
                                    <S.MenuSpan></S.MenuSpan>
                                    <S.MenuSpan></S.MenuSpan>
                                </S.MenuSpanDiv>
                                <S.MenuItem>
                                    {homeMatch ? (
                                        <S.Match to="/">
                                            Home
                                        </S.Match>
                                    ) : (
                                        <S.LinkStyle to="/">
                                            Home
                                        </S.LinkStyle>
                                    )}
                                </S.MenuItem>
                                <S.MenuItem>
                                    {movieMatch ? (
                                        <S.Match to="/movie">
                                            Movie
                                        </S.Match>
                                    ) : (
                                        <S.LinkStyle to="/movie">
                                            Movie
                                        </S.LinkStyle>
                                    )}
                                </S.MenuItem>
                                <S.MenuItem>
                                    {tvMatch ? (
                                        <S.Match to="/tv">
                                            TV Shows
                                        </S.Match>
                                    ) : (
                                        <S.LinkStyle to="/tv">
                                            Tv Shows
                                        </S.LinkStyle>
                                    )}
                                </S.MenuItem>
                                <S.MenuItem>
                                    {tvMatch ? (
                                        <S.Match to="/shopping">
                                            Shopping
                                        </S.Match>
                                    ) : (
                                        <S.LinkStyle to="/shopping">
                                            Shopping
                                        </S.LinkStyle>
                                    )}
                                </S.MenuItem>
                            </S.FalMenuItems>
                        </S.FalMenuWrap>
                        <S.FalMenu2Wrap>
                            <S.Search onSubmit={handleSubmit(onSearch)}>
                                <S.Input
                                    {...register("keyword", { required: true, minLength: 2 })}
                                    placeholder="Search"
                                />
                            </S.Search>
                            <S.LoginWrap>
                                <S.Login to="/login" onClick={MenuOnClick}>Login</S.Login>
                            </S.LoginWrap>
                        </S.FalMenu2Wrap>
                    </S.FalNav>
                )
            }
        </>
    );
}

export default Header;
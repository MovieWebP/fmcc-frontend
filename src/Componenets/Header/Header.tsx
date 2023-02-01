import { useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as S from "./HeaderStyle";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import { MdExpandMore } from "react-icons/md"
import { Search } from "./search";

interface OptionProps {
    title: string;
}

function Header() {
    const homeMatch = useMatch("");
    const movieMatch = useMatch("/movie");
    const tvMatch = useMatch("/tv");
    const shoppingMatch = useMatch("/shopping");

    const options: OptionProps[] = [{ title: "Movie" }, { title: "Watchlist" }];

    return (
        <>
            <S.NavBar expand="md" variants="dark">
                <S.MenuWrap>
                    <S.NavTog ><S.TogIcon /></S.NavTog>
                    <Search />
                    <S.NavBarCo id="basic-navbar-nav">
                        <S.MenuItems className="me-auto">
                            {homeMatch ? (
                                <S.MatchItemStyle href="/">Home</S.MatchItemStyle>
                            ) : (
                                <S.ItemStyle href="/">Home</S.ItemStyle>
                            )}

                            {movieMatch ? (
                                <S.NavDrop title="Movie" id="basic-nav-dropdown">
                                    {options.map((option) =>
                                        <>
                                            <S.NavItem href="/movie">{option.title}</S.NavItem>
                                        </>
                                    )}
                                </S.NavDrop>
                            ) : (
                                <S.MatchNavDrop title="Movie" id="basic-nav-dropdown">
                                    {options.map((option) =>
                                        <>
                                            <S.NavItem href="/movie">{option.title}</S.NavItem>
                                        </>
                                    )}
                                </S.MatchNavDrop>
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
                    <S.Title href="/">FM</S.Title>
                </S.MenuWrap>
            </S.NavBar >
        </>
    );
}

export default Header;
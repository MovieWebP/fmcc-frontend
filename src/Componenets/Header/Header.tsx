import { useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as S from "./HeaderStyle";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import { MdExpandMore } from "react-icons/md"
import { Search } from "./search";
import { MenuItems } from "./menuItem";

function Header() {

    return (
        <>
            <S.NavBar expand="md" variants="dark">
                <S.MenuWrap>
                    <S.NavTog ><S.TogIcon /></S.NavTog>
                    <Search />
                    <S.NavBarCo id="basic-navbar-nav">
                        <MenuItems />
                    </S.NavBarCo>
                    <S.Title href="/">FM</S.Title>
                </S.MenuWrap>
            </S.NavBar >
        </>
    );
}

export default Header;
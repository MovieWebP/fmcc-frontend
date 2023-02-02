import * as S from "./HeaderStyle";
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
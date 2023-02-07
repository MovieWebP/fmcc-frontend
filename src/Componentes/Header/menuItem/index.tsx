import { useMatch } from "react-router-dom";
import * as S from "./style";

interface OptionProps {
    title: string;
}

export const MenuItems = () => {

    const homeMatch = useMatch("");
    const movieMatch = useMatch("/movie");
    const tvMatch = useMatch("/tv");
    const shoppingMatch = useMatch("/shopping");

    return (
        <S.MenuItems className="me-auto">
            {homeMatch ? (
                <S.MatchItemStyle href="/">Home</S.MatchItemStyle>
            ) : (
                <S.ItemStyle href="/">Home</S.ItemStyle>
            )}

            {movieMatch ? (
                <S.NavDrop title="Movie" id="basic-nav-dropdown">
                    <S.DropItem href="/movie">Movie</S.DropItem>
                    <S.DropItem href="/watch-now/movie">Watch now</S.DropItem>
                </S.NavDrop>
            ) : (
                <S.MatchNavDrop title="Movie" id="basic-nav-dropdown">
                    <S.DropItem href="/movie">Movie</S.DropItem>
                    <S.DropItem href="/watch-now/movie">Watch now</S.DropItem>
                </S.MatchNavDrop>
            )}

            {tvMatch ? (
                <S.MatchItemStyle href="/tv">TV Shows</S.MatchItemStyle>
            ) : (
                <S.ItemStyle href="/tv">TV Shows</S.ItemStyle>
            )}

            {/* {shoppingMatch ? (
                <S.MatchItemStyle href="/shopping">Shopping</S.MatchItemStyle>
            ) : (
                <S.ItemStyle href="/shopping">Shopping</S.ItemStyle>
            )} */}
        </S.MenuItems>
    )
}
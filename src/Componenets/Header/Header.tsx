import { useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as S from "./HeaderStyle";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";


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
            <S.NavBar expand="md" variants="dark">
                <S.MenuWrap>
                    <S.NavTog ><S.TogIcon /></S.NavTog>
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
                    <S.NavBarCo id="basic-navbar-nav">
                        <S.MenuItems className="me-auto">
                            {homeMatch ? (
                                <S.MatchItemStyle href="/">Home</S.MatchItemStyle>
                            ) : (
                                <S.ItemStyle href="/">Home</S.ItemStyle>
                            )}
                            <NavDropdown
                                style={{ "border": "3px solid blue", "margin": "0px", "padding":"0px" }}
                                title=
                                {movieMatch ? (
                                    <S.MatchItemStyle>Movie</S.MatchItemStyle>
                                ) : (
                                    <S.ItemStyle style={{ "border": "1px solid red", "margin":"0px" }} >Movie</S.ItemStyle>
                                )}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

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
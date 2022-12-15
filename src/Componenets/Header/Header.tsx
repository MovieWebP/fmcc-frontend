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
        navigate(`/search?keyword=${data.keyword}`);
    }

    const [navbar, setNavbar] = useState(false);

    const onClick = () => {
        // console.log(navbar)
        return setNavbar((props) => !props)
    }
    return (
        <S.Nav>
            <S.LinkStyle to="/">
                <S.Title>FM</S.Title>
            </S.LinkStyle>
            <S.MenuWrap>
                <S.MenuItems>
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
                </S.MenuItems>
            </S.MenuWrap>
            <S.Menu2Wrap>
                <S.Search onSubmit={handleSubmit(onSearch)}>
                    <motion.svg
                        style={{ "position": "relative", "left": "1.8rem", "color": "#919191" }}
                        // style={{ "size": "1rem" }}
                        // onClick={toggleSearch}
                        // animate={{ x: searchOpen ? -260 : -110 }} // searchOpen가 참일때 x축으로 100만큼 이동 아니면 -0으로 설정
                        // transition={{ type: "linear" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        width={"1.4rem"}
                        // fontSize={"4rem"}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        ></path>
                    </motion.svg>
                    <S.Input
                        {...register("keyword", { required: true, minLength: 2 })}
                        // animate={inputAnimation}
                        // initial={{ scaleX: 0 }}
                        // transition={{ type: "linear" }}
                        placeholder="Search"
                    />
                </S.Search>
                <S.LoginWrap>
                    <S.Login to="/login">Login</S.Login>
                </S.LoginWrap>
            </S.Menu2Wrap>
        </S.Nav >
    );
}

export default Header;
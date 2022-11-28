import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useForm } from "react-hook-form";
import * as S from "./HeaderStyle";

interface IForm {
    keyword: string;
}

export const navVariants = {
    top: {
        backgroundColor: '#2E2B2B'
    },
    scroll: {
        backgroundColor: '#2E2B2B'
    }
}


function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const homeMatch = useMatch("");
    const movieMatch = useMatch("/movie");
    const tvMatch = useMatch("/tv");
    const navAnimation = useAnimation();
    const inputAnimation = useAnimation();
    const { scrollY } = useScroll();
    const toggleSearch = () => {
        if (searchOpen) {
            inputAnimation.start({
                scaleX: 0,
            });
        } else {
            inputAnimation.start({
                scaleX: 1,
            });
        }
        setSearchOpen(!searchOpen);
    };
    useEffect(() => {
        scrollY.onChange(() => {
            if (scrollY.get() > 80) {
                navAnimation.start("scroll");
            } else if (scrollY.get() < 80) {
                navAnimation.start("top");
            }
        })
    }, [scrollY, navAnimation]);

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<IForm>();
    const onSearch = (data: IForm) => {
        navigate(`/search?keyword=${data.keyword}`);
    }

    return (
        <S.Nav
            variants={navVariants}
            animate={navAnimation}
            initial="top"
        >
            <S.MenuWrap>
                <S.MenuItems>
                    <S.LinkStyle to="/">
                        <S.Title>FM</S.Title>
                    </S.LinkStyle>
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
            <S.MenuWrap>
                <S.Search onSubmit={handleSubmit(onSearch)}>
                    <motion.svg
                        style={{ "position": "relative", "right": "255px" }}
                        onClick={toggleSearch}
                        // animate={{ x: searchOpen ? -260 : -110 }} // searchOpen가 참일때 x축으로 100만큼 이동 아니면 -0으로 설정
                        // transition={{ type: "linear" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
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
                <S.Login to="/login">Login</S.Login>
            </S.MenuWrap>
        </S.Nav >
    );
}

export default Header;
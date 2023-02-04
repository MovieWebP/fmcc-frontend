import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const MenuItems = styled(Nav)`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 765px) and (min-width: 300px) {
        align-items: flex-start;
        justify-content: flex-start;
        padding: 10px 0;
    };
`;

export const MatchItemStyle = styled(Nav.Link)`
    margin: 0;
    padding: 0;
    align-items: center;
    color: ${(props) => props.theme.white};
    text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
    font-weight: 500;
    transition: all .25s ease-in-out;   
    transition-delay: 0s;
    font-size: 1.5rem;
    &:hover{
        color: ${(props) => props.theme.white};
    }
    @media screen and (max-width: 765px) and (min-width: 500px) {
        margin-bottom: 10px;
        font-size: 1.8rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        margin-bottom: 5px;
        font-size: 2.3rem;
    };
`;

export const ItemStyle = styled(MatchItemStyle)`
    color: ${(props) => props.theme.navbar};
    margin: 0;
    padding: 0;

    &:hover{
        color: ${(props) => props.theme.white};
    }
`;

export const NavDrop = styled(NavDropdown)`
    color: white;
    margin: 0;
    padding: 0;
    & > a {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        @media screen and (max-width: 765px) and (min-width: 500px) {
            margin-bottom: 10px;
            font-size: 1.8rem;
        };
        @media screen and (max-width: 500px) and (min-width: 300px) {
            margin-bottom: 5px;
            font-size: 2.3rem;
        };
    }
    #basic-nav-dropdown{
        color: ${(props) => props.theme.white};
        &:hover{
            color: ${(props) => props.theme.white};
        }
    }

    & > div {
    }
    .dropdown-menu{
        background-color: rgba(0,0,0,0.5);
        @media screen and (max-width: 765px) and (min-width: 300px) {
            background: none;
            border: none;
        };
    }
`;

export const MatchNavDrop = styled(NavDrop)`
    #basic-nav-dropdown{
        color:${(props) => props.theme.navbar};
        &:hover{
            color: ${(props) => props.theme.white};
        }
    }
`;

export const DropItem = styled(NavDropdown.Item)`
    font-size: 1.3rem;
    color: ${(props) => props.theme.navbar};
        z-index: 39;
    &:hover{
        color: ${(props) => props.theme.white};
        background-color: transparent;
    }
    @media screen and (max-width: 765px) and (min-width: 500px) {
        margin-bottom: 10px;
        font-size: 1.6rem;
    };
    @media screen and (max-width: 500px) and (min-width: 300px) {
        margin-bottom: 5px;
        font-size: 2.1rem;
    };
`;
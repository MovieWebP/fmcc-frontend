import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Componenets/Header/Header";
import Login from "./Route/Register/Login/Login";
import SignUp from "./Route/Register/SignUp/SignUp";

import Movie from "./Route/Movie/Movie";
import Home from "./Route/Home/Home";
import TV from "./Route/TV/Tv Shows";
import Movies from "./Route/Detail/Detail";
import Search from "./Route/Search/Search";
import Shopping from "./Route/Shopping/Shopping";
import * as S from "./Route/Style"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/:part/:sliderPart/:id" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

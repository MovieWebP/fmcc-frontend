import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componenets/Header/Header";
import Login from "./Register/Login/Login";
import SignUp from "./Register/SignUp/SignUp";

import Movie from "./Route/Movie/Movie";
import Home from "./Route/Home/Home";
import TV from "./Route/TV/Tv Shows";
import Movies from "./Route/Detail/Detail";
import Search from "./Route/Search/Search";
import Shopping from "./Route/Shopping/Shopping";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/fm" element={<Home />} />
        <Route path="/fm/login" element={<Login />} />
        <Route path="/fm/movie" element={<Movie />} />
        <Route path="/:part/:sliderPart/:id" element={<Movies />} />
        <Route path="/fm/tv" element={<TV />} />
        <Route path="/fm/search" element={<Search />} />
        <Route path="/fm/login" element={<Login />} />
        <Route path="/fm/signup" element={<SignUp />} />
        <Route path="/fm/shopping" element={<Shopping />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componentes/Header/Header";
import Login from "./Route/Register/Login/Login";
import SignUp from "./Route/Register/SignUp/SignUp";
import Movie from "./Route/Movie/Movie";
import Home from "./Route/Home/Home";
import TV from "./Route/TV/Tv Shows";
import Movies from "./Route/Detail/Detail";
import Search from "./Route/Search/Search";
import Shopping from "./Route/Shopping/Shopping";
import Dashboard from "./Route/Dashboard/Dashboard";
import WatchNow from "./Route/WatchNow/WatchNow";
import Video from "./Componentes/Video/Video";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/watch-now/:part" element={<WatchNow />} />
          <Route path="/watch-now/:part/:id" element={<Video />} />
          <Route path="/:part/:sliderPart/:id" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componenets/Header/Header";
import Login from "./Componenets/Header/Login/Login";
import Movie from "./Route/Movie/Movie";
import Home from "./Route/Home/Home";
import TV from "./Route/TV/Tv Shows";
import Movies from "./Route/Movies/Movies";

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
      </Routes>
    </Router>
  );
}

export default App;

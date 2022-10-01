import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componenets/Header/Header";
import Login from "./Componenets/Header/Login/Login";
import Movie from "./Route/Movie/Movie";
import Home from "./Route/Home/Home";
import TV from "./Route/TV/Tv Shows";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<TV />} />
      </Routes>
    </Router>
  );
}

export default App;

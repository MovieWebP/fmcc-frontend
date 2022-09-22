import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componenets/Header/Header";
import Home from "./Route/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

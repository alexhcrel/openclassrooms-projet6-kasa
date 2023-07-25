import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Fichelogement from "./pages/FicheLogement";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/projet_6_kasa" element={<Home />} />
          <Route
            path={`/projet_6_kasa/fichelogement/:logementId`}
            element={<Fichelogement />}
          />
          <Route path="/projet_6_kasa/about" element={<About />} />
          <Route path="/projet_6_kasa/*" element={<Error />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

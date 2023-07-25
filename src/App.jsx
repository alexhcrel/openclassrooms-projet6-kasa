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
          <Route path="/homepage" element={<Home />} />
          <Route
            path={`/fichelogement/:logementId`}
            element={<Fichelogement />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// Import Routes de react-router-dom -- router.jsx // index.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Composants
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Error from "../pages/Error/Error";
import Place from "../pages/Place/Place";

//
function Router () {
    return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:id" element={<Place />} />
      <Route path="/erreur" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    );
}
export default Router;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Place from "../pages/Place/Place";
import About from "../pages/About/About";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Error404 from "../pages/Error/Error404";

function Router () {
    return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Place/:id" element={<Place />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    );
}

export default Router;
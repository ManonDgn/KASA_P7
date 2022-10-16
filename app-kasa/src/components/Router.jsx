// Import Routes de react-router-dom -- router.jsx // index.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Composants
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import Error404 from "../pages/Error/Error404";
// import Place from "../pages/Place/Place";

function Router () {
    return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    );
}

export default Router;
// <Route path="/Place/:id" element={<Place />} />
// <Route path="*" element={<Error404 />} />
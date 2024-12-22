/** @format */

import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {
  return (
    <main className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    </main>
  );
}

export default App;

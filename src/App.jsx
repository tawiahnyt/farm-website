/** @format */

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import GreenDevelopment from "./pages/GreenDevelopment";


function App() {
  return (
    <main className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products-and-services" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/green-development" element={<GreenDevelopment />} />
      </Routes>
    </main>
  );
}

export default App;


import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import WhatsApp from "./Components/Whatsapp/Whatsapp";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";
import LandingPage from "./Components/LandingPage/LandingPage";
import Products from "./Components/Product_List/Products";
import ProductDetail from "./Components/Product_details/ProductDetail";

const App = () => {
  
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      <WhatsApp />
      <Footer />
    </>
  );
};

export default App;

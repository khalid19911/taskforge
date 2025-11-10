import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/FeaturedProducts";
import Newsletter from "./components/Newsletter";
import LogoImage from "./assets/images/pain_kulture_logo.png";

// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div className="bg-black h-auto w-full flex flex-col items-center justify-center text-center md:text-left md:p-50">
                <img
                  src={LogoImage}
                  alt="PainKulture Logo"
                  className="md:w-120 h-auto object-contain"
                />
              </div>

              <div className="bg-black w-full relative flex items-center justify-center text-center flex-col gap-10 p-10 text-white">
                <h1 className="text-7xl">EXPLORE OUR COLLECTION</h1>
                <FeaturedProducts />
              </div>

              <Newsletter />
            </>
          }
        />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;

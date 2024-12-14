import {React, useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import ShoppingCart from "./components/ShoppingCart";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";

const App = () => {

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  // Cambia el modo en el DOM cuando el estado cambia.
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (mediaQuery.matches) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };
  
    // Escucha los cambios en las preferencias del sistema.
    mediaQuery.addEventListener('change', handleChange);
  
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    <div className="overflow-hidden">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<ProductDetails />}></Route>
        </Routes>
        <ShoppingCart />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

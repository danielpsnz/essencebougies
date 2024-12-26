import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

import ShoppingCart from "./components/ShoppingCart";
import Navigation from "./components/Navigation/Navigation";
import Product from "./components/Product";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    fetch("http://localhost:5001/api/productos/") // Cambia a HTTPS solo si es necesario y está configurado
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

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
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product" element={<Product producto={products}/>} />
        </Routes>
        <ShoppingCart />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
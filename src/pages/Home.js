import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

import Product from '../components/Product'
import Hero from '../components/Hero'
import Feature from "../components/FeatureSection";
import BentoGrid from "../components/BentoGrid";
import Newsletter from "../components/Newsletter";
import BlogSection from "../components/BlogSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  console.log(products);

  // get only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
    );
  });

  return (
    <div className="bg-white dark:bg-slate-800">
      <Hero />
      <Feature />
      <BentoGrid />
      <Product />
      <Testimonials />
      <BlogSection />
      <Newsletter />
    </div>
  );
};

export default Home;

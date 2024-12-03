import React from "react";
import ProductList from "./ProductList"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CategoriesCarousel from "./CategoriesCarousel";
import Footer from "./Footer";
import Navbar from "../layout/Navbar"; 
import DynamicModal from "../layout/DynamicModal";
import NotificationBar from "../layout/NotificationBar";
import ImageCarousel from "./ImageCarousel"; 


function Home() {
  return (
    <>
      <DynamicModal />
      <NotificationBar />
      <ImageCarousel />
      
      <div className="container">

        <div className="text-center">
          <h2>Los más vendidos</h2>
          <p>Explora nuestros productos</p>
          </div>
        <ProductList />
        <ProductList />
        <CategoriesCarousel />
        
      </div>
      <Footer/>
    </>
  );
}

export default Home;

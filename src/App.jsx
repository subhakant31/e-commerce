import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HeroBanner from "./components/Organisms/HeroBanner/HeroBanner";
import Header from "./components/Organisms/Header/Header";
import { GlobalStyles } from "./styles/globalStyles";
import Footer from "./components/Organisms/Footer/Footer";
import "./App.css";
import HomePage from "./components/Pages/HomePage/HomePage";
import { ProductContext } from "./contexts/productContext";
import ProductsList from "./components/Pages/ProductsList/ProductsList";
import { Card } from "./components/Molecules/Card/Card";
import ProductsDetail from "./components/Pages/ProductDetail/ProductDetail";

function App() {
  const [productData, setProductData] = useState([]);

  return (
    <Router>
      <>
        <GlobalStyles />
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/products'
            element={
              <ProductContext.Provider value={[productData, setProductData]}>
                <ProductsList></ProductsList>
              </ProductContext.Provider>
            }
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

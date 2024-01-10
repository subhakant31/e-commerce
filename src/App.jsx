import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { UserCartContext } from "./contexts/userCartContext";
import UserCart from "./components/Pages/UserCart/UserCart";
import { SearchQueryContext } from "./contexts/productContext";
function App() {
  const [productData, setProductData] = useState(
    JSON.parse(localStorage.getItem("productData")) || []
  );
  const [userCart, setUserCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    // Save productData to local storage whenever it changes
    localStorage.setItem("productData", JSON.stringify(productData));
  }, [productData]);

  return (
    <Router>
      <>
        <GlobalStyles />
        <UserCartContext.Provider value={[userCart, setUserCart]}>
          <SearchQueryContext.Provider value={[searchQuery, setSearchQuery]}>
            <Header></Header>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route
                path='/products'
                element={
                  <ProductContext.Provider
                    value={[productData, setProductData]}
                  >
                    <ProductsList></ProductsList>
                  </ProductContext.Provider>
                }
              />
              <Route
                path='/products/:id'
                element={
                  <ProductContext.Provider
                    value={[productData, setProductData]}
                  >
                    <ProductsDetail></ProductsDetail>
                  </ProductContext.Provider>
                }
              ></Route>
            </Routes>
            <Footer />
          </SearchQueryContext.Provider>
        </UserCartContext.Provider>
        <UserCart />
      </>
    </Router>
  );
}

export default App;

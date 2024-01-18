import React, { useContext, useEffect, useState } from "react";
import { StyledProductsList } from "./ProductsListPage.styled";
import { Heading } from "../../Atoms/Heading/Heading";
import data from "../../../data/productsData";
import { Card } from "../../Molecules/Card/Card";
import { CiFilter } from "react-icons/ci";
import {
  ProductContext,
  SearchQueryContext,
} from "../../../contexts/productContext";
import Pagination from "../../Molecules/Pagination/Pagination";
import Loader from "../../Atoms/Loader/Loader";
import ProductControlPanel from "../../Organisms/ProductControlPanel/ProductControlPanel";
import { useLocation } from "react-router-dom";
import { ErrorText } from "../../Atoms/ErrorText/ErrorText";

function ProductsListPage(props) {
  const [productData, setProductData] = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isControlPanelVisible, setIsControlPanelVisible] = useState(() => {
    if (window.innerWidth <= 1200) {
      return false;
    } else {
      return true;
    }
  }); //setting visibility of control panel on the basis of device using

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const productsPerPage = 9; //adjust number of products you want to display on one page
  useEffect(() => {
    setTimeout(() => {
      setProductData(data);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = query
    ? productData?.sneakers?.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : productData?.sneakers || []; // Default to an empty array if productData or sneakers is undefined

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function sortData(value) {
    let sortedProducts = [];

    switch (value) {
      case "price-high-low":
        sortedProducts = [...filteredProducts].sort(
          (a, b) => b.retail_price_cents - a.retail_price_cents
        );
        break;

      case "price-low-high":
        sortedProducts = [...filteredProducts].sort(
          (a, b) => a.retail_price_cents - b.retail_price_cents
        );
        break;

      case "latest":
        sortedProducts = [...filteredProducts].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;

      default:
        sortedProducts = [...filteredProducts];
    }
    setProductData({ sneakers: sortedProducts });
    setCurrentPage(1);
  }

  return (
    <StyledProductsList>
      <Heading size='medium' text={"Shop"} centeredText></Heading>

      {/* Sorting dropdown */}

      <div className='product-list-filter-container'>
        {/* Conditionally render ProductControlPanel based on screen size */}

        {loading ? (
          <Loader />
        ) : filteredProducts.length === 0 ? (
          <ErrorText
            text={"No results matching your search"}
            size={"medium"}
            color={"black"}
            centeredText={true}
            className={"error-text"}
          ></ErrorText>
        ) : (
          <>
            {isControlPanelVisible && (
              <div className='product-control-panel-container'>
                <ProductControlPanel></ProductControlPanel>
              </div>
            )}
            <div className='items-pagination-container'>
              {/* Product list */}

              <div className='btn-wrapper'>
                <button
                  className='filter-btn'
                  onClick={() => setIsControlPanelVisible((prev) => !prev)}
                >
                  <CiFilter />
                </button>
                <select
                  className='sorting-buttons'
                  onChange={(e) => {
                    sortData(e.target.value);
                  }}
                >
                  <option value='default'>Sort By</option>
                  <option value='price-high-low'>price (high-low)</option>
                  <option value='price-low-high'>price (low-high)</option>
                  <option value='latest'>latest</option>
                </select>
              </div>

              <ul className='item-list'>
                {currentProducts.map((item, key) => (
                  <Card
                    image={item.original_picture_url}
                    altText={"image of product"}
                    title={item.name}
                    brandName={item.brand_name}
                    price={item.retail_price_cents}
                    productId={item.id}
                    key={item.id}
                  ></Card>
                ))}
              </ul>

              {/* Pagination */}
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={filteredProducts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </>
        )}
      </div>
    </StyledProductsList>
  );
}

export default ProductsListPage;

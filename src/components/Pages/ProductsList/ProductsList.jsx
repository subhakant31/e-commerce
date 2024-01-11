import { StyledProductsList } from "./ProductsList.styled";
import { Heading } from "../../Atoms/Heading/Heading";
import { useContext, useEffect, useState } from "react";
import data from "../../../data/productsData";
import { Card } from "../../Molecules/Card/Card";
import {
  ProductContext,
  SearchQueryContext,
} from "../../../contexts/productContext";
import Pagination from "../../Molecules/Pagination/Pagination";
import Loader from "../../Atoms/Loader/Loader";
import ProductControlPanel from "../../Organisms/ProductControlPanel/ProductControlPanel";
import { useLocation } from "react-router-dom";

function ProductsList(props) {
  const [productData, setProductData] = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const productsPerPage = 9;

  useEffect(() => {
    // Assuming data fetching is asynchronous, set the data and loading state in useEffect
    setProductData(data);
    setLoading(false);
  }, []); // Run once on component mount

  if (loading) {
    return <Loader />; // Return a loader while data is being fetched
  }

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
        <ProductControlPanel></ProductControlPanel>
        {/* Conditional rendering based on loading state */}
        {loading ? (
          <Loader />
        ) : (
          <div className='items-pagination-container'>
            {/* Product list */}
            <div className='sorting-btn-wrapper'>
              <select
                className='sorting-buttons'
                onChange={(e) => {
                  sortData(e.target.value);
                }}
              >
                <option value='price-high-low'>price(high-low)</option>
                <option value='price-low-high'>price(low-high)</option>
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
        )}
      </div>
    </StyledProductsList>
  );
}

export default ProductsList;

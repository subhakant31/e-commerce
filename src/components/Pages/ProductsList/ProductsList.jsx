import { StyledProductsList } from "./ProductsList.styled";
import { Heading } from "../../Atoms/Heading/Heading";
import { useContext, useEffect, useState } from "react";
import data from "../../../data/productsData";
import { Card } from "../../Molecules/Card/Card";
import { ProductContext } from "../../../contexts/productContext";
import Pagination from "../../Molecules/Pagination/Pagination";
import Loader from "../../Atoms/Loader/Loader";
import ProductControlPanel from "../../Organisms/ProductControlPanel/ProductControlPanel";
function ProductsList(props) {
  const [productData, setProductData] = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // New state for loading
  const productsPerPage = 9;

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setProductData(data);
        setLoading(false); // Set loading to false after data is fetched
      }, 1000); // Adjust the delay as needed
    };

    fetchData();
  }, []);

  // Check if productData and productData.sneakers are defined
  if (loading || !productData || !productData.sneakers) {
    return <Loader />; // Render loading indicator
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productData.sneakers.slice(
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
        sortedProducts = [...productData.sneakers].sort(
          (a, b) => b.retail_price_cents - a.retail_price_cents
        );
        break;

      case "price-low-high":
        sortedProducts = [...productData.sneakers].sort(
          (a, b) => a.retail_price_cents - b.retail_price_cents
        );
        break;

      case "latest":
        sortedProducts = [...productData.sneakers].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;

      default:
        sortedProducts = [...productData.sneakers];
    }

    setProductData({ sneakers: sortedProducts });
    setCurrentPage(1); // Reset to the first page after sorting
  }

  return (
    <StyledProductsList>
      <Heading size='medium' text={"Shop"} centeredText></Heading>

      {/* Sorting dropdown */}
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
      <div className='product-list-filter-container'>
        <ProductControlPanel></ProductControlPanel>
        {/* Conditional rendering based on loading state */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className='items-pagination-container'>
            {/* Product list */}
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
              totalProducts={productData.sneakers.length}
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

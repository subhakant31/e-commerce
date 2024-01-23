import React, { useContext, useEffect, useState } from "react";
import { StyledProductsList } from "./ProductsListPage.styled";
import { Heading } from "../../Atoms/Heading/Heading";
import data from "../../../data/productsData";
import { Card } from "../../Molecules/Card/Card";
import { CiFilter } from "react-icons/ci";
import { ProductContext } from "../../../contexts/productContext";
import Pagination from "../../Molecules/Pagination/Pagination";
import Loader from "../../Atoms/Loader/Loader";
import ProductControlPanel from "../../Organisms/ProductControlPanel/ProductControlPanel";
import { useLocation } from "react-router-dom";
import { ErrorText } from "../../Atoms/ErrorText/ErrorText";
import { errorText } from "../../../utils/constant/string-const";
import { centsToDollars } from "../../../helperFunctions";

function ProductsListPage(props) {
  const [productData, setProductData] = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filtersApplied, setFiltersApplied] = useState({
    selectedBrands: [],
    selectedColors: [],
    selectedPriceRange: [],
  });

  const [isControlPanelVisible, setIsControlPanelVisible] = useState(() => {
    if (window.innerWidth <= 1200) {
      return false;
    } else {
      return true;
    }
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const productsPerPage = 9;

  useEffect(() => {
    setTimeout(() => {
      setProductData(data);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProductsBySearch = productData?.sneakers
    ? query
      ? productData.sneakers.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      : productData.sneakers
    : [];

  const combinedFilters = {
    selectedBrands: filtersApplied.selectedBrands,
    selectedColors: filtersApplied.selectedColors,
    selectedPriceRange: filtersApplied.selectedPriceRange,
  };

  const postSearchFilteredProducts = filteredProductsBySearch.filter((item) => {
    const matchesBrand =
      combinedFilters.selectedBrands.length === 0 ||
      combinedFilters.selectedBrands.includes(item.brand_name);
    const matchesColor =
      combinedFilters.selectedColors.length === 0 ||
      combinedFilters.selectedColors.includes(item.color);

    const matchesPriceRange =
      combinedFilters.selectedPriceRange.length === 0 ||
      (centsToDollars(item.retail_price_cents) >=
        combinedFilters.selectedPriceRange[0] &&
        centsToDollars(item.retail_price_cents) <=
          combinedFilters.selectedPriceRange[1]);

    return matchesBrand && matchesColor && matchesPriceRange;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = postSearchFilteredProducts.slice(
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
        sortedProducts = [...filteredProductsBySearch].sort(
          (a, b) => b.retail_price_cents - a.retail_price_cents
        );
        break;

      case "price-low-high":
        sortedProducts = [...filteredProductsBySearch].sort(
          (a, b) => a.retail_price_cents - b.retail_price_cents
        );
        break;

      case "latest":
        sortedProducts = [...filteredProductsBySearch].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;

      default:
        sortedProducts = [...filteredProductsBySearch];
    }

    setProductData({ sneakers: sortedProducts });
    setCurrentPage(1);
  }

  return (
    <StyledProductsList>
      <Heading size='medium' text={"Shop"} centeredText></Heading>
      <div className='product-list-filter-container'>
        {loading ? (
          <Loader />
        ) : (
          <>
            {isControlPanelVisible && (
              <div className='product-control-panel-container'>
                <ProductControlPanel
                  filtersApplied={filtersApplied}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setFiltersApplied={setFiltersApplied}
                ></ProductControlPanel>
              </div>
            )}
            <div className='items-pagination-container'>
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
              <div className='product-list-info-wrapper'>
                <span className='pagination-info'>
                  {query
                    ? `Showing results for '${query}' `
                    : `Showing all products`}
                </span>
                <span className='pagination-info'>{`Showing ${
                  indexOfFirstProduct + 1
                }-${Math.min(
                  indexOfLastProduct,
                  postSearchFilteredProducts.length
                )} of ${postSearchFilteredProducts.length} items`}</span>
              </div>
              {currentProducts.length === 0 ? (
                <ErrorText
                  text={errorText.noResultText}
                  size={"medium"}
                  color={"black"}
                  centeredText={true}
                  className={"error-text"}
                ></ErrorText>
              ) : (
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
              )}

              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={postSearchFilteredProducts.length}
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

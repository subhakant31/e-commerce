import React from "react";
import { StyledPagination } from "./Pagination.styled";
import { scrollToTop } from "../../../helperFunctions";
import { Button } from "../../Atoms/Button/Button";
const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Check if there are no products to display
  if (totalProducts === 0) {
    return null; // Don't render pagination if there are no products
  }

  return (
    <StyledPagination>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Button
              text={number}
              className={currentPage === number ? "active" : ""}
              type={"pagination"}
              onClick={() => {
                scrollToTop();
                paginate(number);
              }}
            ></Button>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;

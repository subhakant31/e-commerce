import { StyledPagination } from "./Pagination.styled";
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

  return (
    <StyledPagination>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} >
            <button className={currentPage === number ? "active" : ""} onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;

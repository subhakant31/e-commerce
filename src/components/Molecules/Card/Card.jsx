import { StyledCard } from "./Card.styled";
import { Link } from "react-router-dom";
import { centsToDollars, scrollToTop } from "../../../helperFunctions";
export const Card = ({
  image,
  altText,
  title,
  price,
  productId,
  brandName,
}) => {
  return (
    <>
      <StyledCard>
        <Link
          to={`/products/${productId}`}
          className='product'
          data-id={productId}
          onClick={scrollToTop}
        >
          <div className='image-container'>
            <img src={image} alt={altText} />
          </div>
          <span className='title'>{title}</span>
          <span className='brand'> {brandName}</span>

          <span className='price'>${centsToDollars(price)}</span>
        </Link>
      </StyledCard>
    </>
  );
};

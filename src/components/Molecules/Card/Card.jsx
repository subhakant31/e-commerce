import { StyledCard } from "./Card.styled";
import { centsToDollars } from "../../../helperFunctions";
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
        <a href='/' className='product' data-id={productId}>
          <div className='image-container'>
            <img src={image} alt={altText} />
          </div>
          <span className='title'>{title}</span>
          <span className='brand'> {brandName}</span>

          <span className='price'>${centsToDollars(price)}</span>
        </a>
      </StyledCard>
    </>
  );
};

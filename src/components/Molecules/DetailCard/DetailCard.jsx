import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserCartContext } from "../../../contexts/userCartContext";
import { Heading } from "../../Atoms/Heading/Heading";
import { centsToDollars, scrollToTop } from "../../../helperFunctions";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import { RiDeleteBin6Line } from "react-icons/ri";
import { StyledDetailCard } from "./DetailCard.styled";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
export const DetailCard = ({
  showConfirmation,
  setShowConfirmation,
  itemToDelete,
  setItemToDelete,
}) => {
  const [userCart, setUserCart] = useContext(UserCartContext);
  const openConfirmation = (id) => {
    setItemToDelete(id);
    setShowConfirmation(true);
  };
  return (
    <StyledDetailCard>
      <div className='cart-wrapper--main'>
        {userCart?.map((product, key) => {
          return (
            <div className='cart-details' key={key}>
              <div className='cart-wrapper'>
                <div className='image-wrapper'>
                  <Link
                    to={`/products/${product.item.id}`}
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    <img src={product.item.grid_picture_url} alt={"product"} />
                  </Link>
                </div>
                <div className='details'>
                  <Link to={`/products/${product.item.id}`}>
                    <Heading text={product.item.name} size={"small"}></Heading>
                  </Link>
                  <div className='product-size'>
                    Size: {product.selectedSize}
                  </div>
                  <div className='product-color'>
                    Color: <ColorIcon color={product.item.color} />
                  </div>
                  <p className='product-price'>
                    ${centsToDollars(product.item.retail_price_cents)}
                  </p>
                </div>
              </div>
              <div className='button-wrapper'>
                <RiDeleteBin6Line
                  data-id={product.item.id}
                  onClick={() => openConfirmation(product.item.id)}
                  title='delete item'
                />
                <div className='price-quantity-wrapper'>
                  <ProductQuantity
                    id={product.item.id}
                    quantity={product.quantity}
                    itemFor={"cart-page"}
                    className={"product-quantity-btn-wrapper"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledDetailCard>
  );
};

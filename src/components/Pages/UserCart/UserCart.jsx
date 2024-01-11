import { Heading } from "../../Atoms/Heading/Heading";
import { StyledUserCart } from "./UserCart.styled";
import data from "../../../data/productsData";
import { Button } from "../../Atoms/Button/Button";
import ProductQuantity from "../../Atoms/ProductQuantity/ProductQuantity";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import ProductSizeRanges from "../../Atoms/ProductSizeRanges/ProductSizeRanges";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import { centsToDollars } from "../../../helperFunctions";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { UserCartContext } from "../../../contexts/userCartContext";
import { ProductContext } from "../../../contexts/productContext";
import OrderSummaryCard from '../../Atoms/OrderSummaryCard/OrderSummaryCard';

const UserCart = () => {
  const [userCart, setUserCart] = useContext(UserCartContext);

  return (
    <StyledUserCart>
      <Heading size='medium' text={"Your cart"} centeredText={true} />
      {userCart.map((product, key) => {
        return (
          <div className='cart-wrapper--main'>
            <div className='cart-details'>
              <div className='cart-wrapper'>
                <img
                  src={product.item.grid_picture_url}
                  alt={"image of product"}
                />
                <div>
                  <TextParagraph
                    text={product.item.name}
                    subText={true}
                  ></TextParagraph>
                  <div className='product-size'>
                    Size: {product.selectedSize}
                  </div>
                  <div className='product-color'>
                    Color: <ColorIcon color={product.item.color} />
                  </div>
                  <p>${centsToDollars(product.item.retail_price_cents)}</p>
                </div>
              </div>
              <div className='button-wrapper'>
                <RiDeleteBin6Line />
                <ProductQuantity quantity={product.quantity} />
              </div>
            </div>
          </div>
        );
      })}
    </StyledUserCart>
  );
};

export default UserCart;

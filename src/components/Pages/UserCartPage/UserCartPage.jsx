import { Heading } from "../../Atoms/Heading/Heading";
import { StyledUserCart } from "./UserCartPage.styled";
import data from "../../../data/productsData";
import { Link, useNavigate } from "react-router-dom";
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
import OrderSummaryCard from "../../Molecules/OrderSummaryCard/OrderSummaryCard";
import { ErrorText } from "../../Atoms/ErrorText/ErrorText";
import { toast } from "react-toastify";

const UserCartPage = () => {
  const [userCart, setUserCart] = useContext(UserCartContext);
  const navigate = useNavigate();

  function deleteItemFromCart(e) {
    const id = e.target.closest("[data-id]").dataset.id;
    setUserCart((prevUserCart) =>
      prevUserCart.filter((item) => item.item.id != id)
    );
    toast.success(`Item ${id} Deleted`);
  }

  return (
    <StyledUserCart>
      <Heading size='medium' text={"Your cart"} centeredText={true} />
      {userCart.length === 0 ? (
        <div className='page-error-dialogue'>
          <ErrorText
            text={"No items present in the cart"}
            size={"medium"}
            color={"black"}
          ></ErrorText>
          <Button
            text={"browse products"}
            primary={true}
            onClick={() => {
              navigate("/products");
            }}
            className={"navigate-home"}
          ></Button>
        </div>
      ) : (
        <div className='order-summary-card'>
          <div className='cart-wrapper--main'>
            {userCart.map((product, key) => {
              return (
                <div className='cart-details'>
                  <div className='cart-wrapper'>
                    <img
                      src={product.item.grid_picture_url}
                      alt={"image of product"}
                    />
                    <div className='details'>
                      <Heading
                        text={product.item.name}
                        size={"small"}
                      ></Heading>
                      <div className='product-size'>
                        Size: {product.selectedSize}
                      </div>
                      <div className='product-color'>
                        Color: <ColorIcon color={product.item.color} />
                      </div>
                      <p>${centsToDollars(product.item.retail_price_cents)}</p>
                      <div className='increment-button'>
                        <p>Total Item Selected:</p>
                        <ProductQuantity
                          id={product.item.id}
                          quantity={product.quantity}
                          itemFor={"cart-page"}
                          className={"product-quantity-btn-wrapper"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='button-wrapper'>
                    <RiDeleteBin6Line
                      data-id={product.item.id}
                      onClick={deleteItemFromCart}
                      title='delete item'
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <OrderSummaryCard />
        </div>
      )}
    </StyledUserCart>
  );
};

export default UserCartPage;

import { Heading } from "../../Atoms/Heading/Heading";
import { StyledUserCart } from "./UserCartPage.styled";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Atoms/Button/Button";
import ProductQuantity from "../../Atoms/ProductQuantity/ProductQuantity";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import { centsToDollars } from "../../../helperFunctions";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { UserCartContext } from "../../../contexts/userCartContext";
import OrderSummaryCard from "../../Molecules/OrderSummaryCard/OrderSummaryCard";
import { ErrorText } from "../../Atoms/ErrorText/ErrorText";
import { toast } from "react-toastify";
import ConfirmationDialogue from "../../Molecules/ConfirmationDialogue/ConfirmationDialogue";
import { buttonText, errorText } from "../../../utils/constant/string-const";
const UserCartPage = () => {
  const [userCart, setUserCart] = useContext(UserCartContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const navigate = useNavigate();

  const deleteItemFromCart = (id) => {
    setUserCart((prevUserCart) =>
      prevUserCart.filter((item) => item.item.id !== id)
    );
    toast.success(`Item ${id} Deleted`);
    closeConfirmation();
  };

  const openConfirmation = (id) => {
    setItemToDelete(id);
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setItemToDelete(null);
    setShowConfirmation(false);
  };

  return (
    <StyledUserCart>
      <Heading size='medium' text={"Your cart"} centeredText={true} />
      {userCart.length === 0 ? (
        <div className='page-error-dialogue'>
          <ErrorText
            text={errorText.noItemText}
            size={"medium"}
            color={"black"}
          ></ErrorText>
          <Button
            text={buttonText.browseProducts}
            primary={true}
            title={buttonText.browseProducts}
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
                <div className='cart-details' key={key}>
                  <div className='cart-wrapper'>
                    <div className='image-wrapper'>
                      <Link to={`/products/${product.item.id}`}>
                        <img
                          src={product.item.grid_picture_url}
                          alt={"product"}
                        />
                      </Link>
                    </div>
                    <div className='details'>
                      <Link to={`/products/${product.item.id}`}>
                        <Heading
                          text={product.item.name}
                          size={"small"}
                        ></Heading>
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
          <OrderSummaryCard />
        </div>
      )}
      {showConfirmation && (
        <ConfirmationDialogue
          onConfirm={() => deleteItemFromCart(itemToDelete)}
          onCancel={closeConfirmation}
          text={"Do you want to delete the item ?"}
        />
      )}
    </StyledUserCart>
  );
};

export default UserCartPage;

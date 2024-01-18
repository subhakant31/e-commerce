import React, { useContext, useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { StyledProductQuantity } from "./ProductQuantity.styled";
import { UserCartContext } from "../../../contexts/userCartContext";

const ProductQuantity = ({ quantity, setQuantity, className, id, itemFor }) => {
  const [userCart, setUserCart] = useContext(UserCartContext);

  const increment = () => {
    if (itemFor === "product-page") {
      setQuantity(quantity + 1);
    } else if (itemFor === "cart-page") {
      updateCartItemQuantity(id, quantity + 1);
    }
  };

  const decrement = () => {
    if (itemFor === "product-page") {
      setQuantity(quantity - 1);
    } else if (itemFor === "cart-page") {
      updateCartItemQuantity(id, quantity - 1);
    }
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setUserCart((prevUserCart) =>
      prevUserCart.map((item) =>
        item.item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  function findQuantityFromId(id) {
    const foundItem = userCart.find((item) => item.item.id === id);
    return foundItem ? foundItem.quantity : undefined;
  }
  
  return (
    <StyledProductQuantity className={className}>
      <button disabled={quantity === 1}>
        <FiMinus onClick={decrement} />
      </button>
      {itemFor === "product-page"
        ? quantity
        : itemFor === "cart-page" && findQuantityFromId(id)}
      <button>
        <GoPlus onClick={increment} />
      </button>
    </StyledProductQuantity>
  );
};

export default ProductQuantity;

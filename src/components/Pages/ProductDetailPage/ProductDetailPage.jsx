import { StyledProductsDetail } from "./ProductDetailPage.styled";
import { Heading } from "../../Atoms/Heading/Heading";
import data from "../../../data/productsData";
import { Button } from "../../Atoms/Button/Button";
import ProductQuantity from "../../Molecules/ProductQuantity/ProductQuantity";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import ProductSizeRanges from "../../Molecules/ProductSizeRanges/ProductSizeRanges";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import Loader from "../../Atoms/Loader/Loader";
import {
  centsToDollars,
  formatDateFromUnixTimestamp,
} from "../../../helperFunctions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../contexts/productContext";
import { useParams } from "react-router-dom";
import { UserCartContext } from "../../../contexts/userCartContext";
import { ErrorText } from "../../Atoms/ErrorText/ErrorText";
import { buttonText, errorText, notificationText } from "../../../utils/constant/string-const";
function ProductsDetailPage() {
  let [productData, setProductData] = useContext(ProductContext);
  const [userCart, setUserCart] = useContext(UserCartContext);
  const [selectedSize, setSelectedSize] = useState();
  const [errorTextVisible, setErrorTextVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const storedData = localStorage.getItem("productData");

    if (storedData) {
      // If data is in local storage, use it
      setProductData(JSON.parse(storedData));
      setLoading(false);
    } else {
      // If data is not in local storage, use the local JavaScript object
      setProductData(data);
      setLoading(false);

      // Save data to local storage
      // localStorage.setItem("productData", JSON.stringify(data));
    }
  }, []);

  function findProductById(id) {
    productData = data;
    // Check if productData and productData.sneakers are defined
    if (!productData || !productData.sneakers) {
      return null;
    }
    const product = productData.sneakers.find(
      (product) => product.id === parseInt(id)
    );
    return product || null; // Return the product object if found, otherwise return null
  }

  const product = findProductById(id); // object of the particular product

  if (!product) {
    // Handle the case where the product is not found or productData is undefined
    return <Loader></Loader>;
  }

  function addItemToCart() {
    if (!selectedSize) {
      setErrorTextVisible(true);
      toast.error(notificationText.productItem.error);
      return;
    } else {
      setErrorTextVisible(false);
    }

    // Check if the item is already in the cart
    const existingItemIndex = userCart.findIndex(
      (cartItem) =>
        cartItem.item.id === product.id &&
        cartItem.selectedSize === selectedSize
    );

    if (existingItemIndex !== -1) {
      // Item is already in the cart, update the quantity
      const updatedCart = [...userCart];
      updatedCart[existingItemIndex].quantity += quantity;
      setUserCart(updatedCart);
      toast.error(notificationText.productItem.itemPresent);
    } else {
      // Item is not in the cart, add it
      setUserCart([
        ...userCart,
        {
          item: product,
          color: product.color,
          selectedSize: selectedSize,
          quantity: quantity,
        },
      ]);
      toast.success(notificationText.productItem.itemAdded);
    }
  }

  return (
    <StyledProductsDetail>
      {loading ? (
        <>
          <Loader></Loader>
        </>
      ) : (
        <div className='product-view-wrapper'>
          <div className='product-left-container'>
            <img src={product.original_picture_url} alt={"image of product"} />
          </div>
          <div className='product-right-container'>
            <Heading size='medium' text={product.name}></Heading>
            <p>${centsToDollars(product.retail_price_cents)}</p>
            <TextParagraph
              text={product.details}
              subText={true}
            ></TextParagraph>
            <div className='product-color'>
              Available Colors: <ColorIcon color={product.color} />
            </div>
            <ProductSizeRanges
              selectedSize={selectedSize}
              setErrorTextVisible={setErrorTextVisible}
              setSelectedSize={setSelectedSize}
              sizes={product.size_range.sort((a, b) => a - b)}
            />
            {errorTextVisible && (
              <ErrorText
                text={errorText.selectSizeText}
                size={"small"}
                color={"red"}
                className={"error-message "}
              ></ErrorText>
            )}
            <div className='button-wrapper'>
              <ProductQuantity
                quantity={quantity}
                setQuantity={setQuantity}
                id={product.id}
                itemFor={"product-page"}
              />
              <Button
                text={buttonText.cartButtonTitle}
                title={buttonText.cartButtonTitle}
                onClick={addItemToCart}
                type={'primary'}
              />
            </div>
          </div>
          <div className='product-details'>
            <table>
              <thead>
                <tr>
                  <th>Product Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brand Name:</td>
                  <td>{product.brand_name}</td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td>{product.gender}</td>
                </tr>
                <tr>
                  <td>Designer:</td>
                  <td>{product.designer}</td>
                </tr>
                <tr>
                  <td>Release Date:</td>
                  <td>
                    {formatDateFromUnixTimestamp(product.release_date_unix)}
                  </td>
                </tr>
                <tr>
                  <td>Release Year:</td>
                  <td>{product.release_year}</td>
                </tr>
                <tr>
                  <td>Box Condition:</td>
                  <td>{product.box_condition}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </StyledProductsDetail>
  );
}

export default ProductsDetailPage;

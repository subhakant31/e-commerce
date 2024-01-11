import { StyledProductsDetail } from "./ProductDetail.styled";
import { Heading } from "../../Atoms/Heading/Heading";
import data from "../../../data/productsData";
import { Button } from "../../Atoms/Button/Button";
import ProductQuantity from "../../Atoms/ProductQuantity/ProductQuantity";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import ProductSizeRanges from "../../Atoms/ProductSizeRanges/ProductSizeRanges";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import Loader from "../../Atoms/Loader/Loader";
import {
  centsToDollars,
  formatDateFromUnixTimestamp,
} from "../../../helperFunctions";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../contexts/productContext";
import { useParams } from "react-router-dom";
import { UserCartContext } from "../../../contexts/userCartContext";

function ProductsDetail() {
  const [productData, setProductData] = useContext(ProductContext);
  const [userCart, setUserCart] = useContext(UserCartContext);
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("productData");

        if (storedData) {
          // If data is in local storage, use it
          setProductData(JSON.parse(storedData));
          setLoading(false);
        } else {
          // If data is not in local storage, fetch it
          // Simulate asynchronous data fetching
          const response = await fetch("your-api-endpoint-here");
          const data = await response.json();

          setProductData(data);
          // Save data to local storage
          localStorage.setItem("productData", JSON.stringify(data));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching or setting data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, setProductData]);

  function findProductById(id) {
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
    // Check if selectedSize is defined
    if (!selectedSize) {
      console.error("Please select a size before adding to the cart");
      return;
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
    }
  }

  return (
    <StyledProductsDetail>
      {loading ? (
        <Loader></Loader>
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
              setSelectedSize={setSelectedSize}
              sizes={product.size_range.sort((a, b) => a - b)}
            />
            <div className='button-wrapper'>
              <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
              <Button text='Add to Cart' onClick={addItemToCart} />
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

export default ProductsDetail;

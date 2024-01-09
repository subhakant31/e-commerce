import { StyledProductsDetail } from "./ProductDetail.styled";
import { Heading } from "../../Atoms/Heading/Heading";
import data from "../../../data/productsData";
import { Button } from "../../Atoms/Button/Button";
import ProductQuantity from "../../Atoms/ProductQuantity/ProductQuantity";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import ProductSizeRanges from "../../Atoms/ProductSizeRanges/ProductSizeRanges";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import { centsToDollars, formatDateFromUnixTimestamp } from "../../../helperFunctions";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/productContext";
import { useParams } from "react-router-dom";

function ProductsDetail() {
  const shoeSizesArray = data.sneakers[0].size_range;
  const sortedShoeSizes = shoeSizesArray.sort((a, b) => a - b);

  const [productData, setProductData] = useContext(ProductContext);

  const { id } = useParams();

  function findProductById(id) {
    const product = productData.sneakers.find(
      (product) => product.id === parseInt(id)
    );
    return product || null; // Return the product object if found, otherwise return null
  }

  const product = findProductById(id); //object of the particular product

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <StyledProductsDetail>
      {console.log(product)}
      <div className='product-view-wrapper'>
        <div className='product-left-container'>
          <img src={product.original_picture_url} alt={"image of product"} />
        </div>
        <div className='product-right-container'>
          <Heading primary='medium' text={product.name}></Heading>
          <p>${centsToDollars(product.retail_price_cents)}</p>
          <TextParagraph text={product.details} subText={true}></TextParagraph>
          <div className='product-color'>
          Available Colors: <ColorIcon color={product.color} />
          </div>
          <ProductSizeRanges sizes={sortedShoeSizes} />
          <div className='button-wrapper'>
            <ProductQuantity />
            <Button text='Add to Cart' />
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
              <td>{formatDateFromUnixTimestamp(product.release_date_unix)}</td>
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
    </StyledProductsDetail>
  );
}

export default ProductsDetail;

import { StyledProductsDetail } from "./ProductDetail.styled";
import { Heading } from "../../Atoms/Heading/Heading";
import data from "../../../data/productsData";
import { Button } from "../../Atoms/Button/Button";
import ProductQuantity from "../../Atoms/ProductQuantity/ProductQuantity";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import ProductSizeRanges from "../../Atoms/ProductSizeRanges/ProductSizeRanges";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import { centsToDollars } from "../../../helperFunctions";

function ProductsDetail() {
    const shoeSizesArray = data.sneakers[0].size_range;
    const sortedShoeSizes = shoeSizesArray.sort((a, b) => a - b);

    function ShoeSizes({ sizes }) {
        const spaceBetweenSizes = 10;
        return (
            <>
                {sizes.map((size, index) => (
                    <span
                        key={index}
                        style={{ marginLeft: spaceBetweenSizes }}
                    >
                        {size}
                    </span>
                ))}
            </>
        );
    };

    return (
        <StyledProductsDetail>
            <div className="product-view-wrapper">
                <div className="product-left-container">
                    <img src={data.sneakers[0].original_picture_url} alt={'image of product'} />
                </div>
                <div className="product-right-container">
                    <Heading primary='medium' text={data.sneakers[0].name}></Heading>
                    <p>${centsToDollars(data.sneakers[0].retail_price_cents)}</p>
                    <TextParagraph text={data.sneakers[0].details} subText={true}></TextParagraph>
                    <div className="product-color">Select Colors: <ColorIcon color={data.sneakers[0].color}/></div>
                    <ProductSizeRanges sizes={sortedShoeSizes}/>
                    <div className="button-wrapper">
                        <ProductQuantity />
                        <Button text='Add to Cart' />
                    </div>
                </div>
            </div>
            <div className="product-details">
                <table>
                    <thead>
                        <tr>
                            <th>Product Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Brand Name:</td>
                            <td>{data.sneakers[0].brand_name}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{data.sneakers[0].gender}</td>
                        </tr>
                        <tr>
                            <td>Designer:</td>
                            <td>{data.sneakers[0].designer}</td>
                        </tr>
                        <tr>
                            <td>Release Date:</td>
                            <td>{data.sneakers[0].release_date}</td>
                        </tr>
                        <tr>
                            <td>Release Year:</td>
                            <td>{data.sneakers[0].release_year}</td>
                        </tr>
                        <tr>
                            <td>Box Condition:</td>
                            <td>{data.sneakers[0].box_condition}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </StyledProductsDetail>
    );
}

export default ProductsDetail;
import { Heading } from '../../Atoms/Heading/Heading';
import { StyledUserCart } from './UserCart.styled';
import data from "../../../data/productsData";
import { Button } from "../../Atoms/Button/Button";
import ProductQuantity from "../../Atoms/ProductQuantity/ProductQuantity";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import ProductSizeRanges from "../../Atoms/ProductSizeRanges/ProductSizeRanges";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import { centsToDollars } from "../../../helperFunctions";
import { RiDeleteBin6Line } from "react-icons/ri";
import OrderSummaryCard from '../../Atoms/OrderSummaryCard/OrderSummaryCard';

const UserCart = () => {

    return (
        <StyledUserCart>
            <Heading size='medium' text={'Your cart'} />
            <div className='order-summary-card'>
                <div className='cart-wrapper--main'>
                    <div className='cart-details'>
                        <div className='cart-wrapper'>
                            <img src={data.sneakers[0].grid_picture_url} alt={"image of product"} />
                            <div className='details'>
                                <TextParagraph text={data.sneakers[0].name} subText={true}></TextParagraph>
                                <div className='product-size'>
                                    Size: <></>
                                </div>
                                <div className='product-color'>
                                    Color: <ColorIcon color={data.sneakers[0].color} />
                                </div>
                                <p>${centsToDollars(data.sneakers[0].retail_price_cents)}</p>
                            </div>
                        </div>
                        <div className='button-wrapper'>
                            <RiDeleteBin6Line />
                            <ProductQuantity />

                        </div>
                    </div>
                </div>
                <OrderSummaryCard />
            </div>
        </StyledUserCart>
    );
};

export default UserCart;
import { StyledOrderSummary } from './OrderSummaryCard.styled';
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import { InputField } from '../InputField/InputField';
import { Button } from '../Button/Button';
import { UserCartContext } from '../../../contexts/userCartContext';
import { useContext } from 'react';
import { centsToDollars } from '../../../helperFunctions';
const OrderSummaryCard = () => {
        const [userCart, setUserCart] = useContext(UserCartContext);
        
        function findTotalAmount(userCart) {
            let totalSum = 0;
            let itemSum = 0;
            for(var i=0;i<userCart.length;i++) {
                itemSum += +(centsToDollars(userCart[i].item.retail_price_cents)*userCart[i].quantity);
                totalSum += itemSum;
                itemSum =0;
            }
            return totalSum.toFixed(2);
        }
    return (
        <StyledOrderSummary>
            <TextParagraph text={'Order Summary'} subText={true} />
            <div className="order-details">
                <p>Subtotal: <span>${findTotalAmount(userCart)}</span></p>
                <p>Discount: <span>0</span></p>
                <p>Delivery Fee: <span>0</span></p>
                <p>Total: <span>${findTotalAmount(userCart)}</span></p>
            </div>
            <div className='order-button-section'>
                <div className='order-button'>
                    <InputField />
                    <Button 
                      text='Apply'
                      className=''
                    />
                </div>
                <Button 
                 text='Go to Checkout'
                 className=''
                />
            </div>
        </StyledOrderSummary>
    );
};

export default OrderSummaryCard;
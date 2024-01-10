import { StyledOrderSummary } from './OrderSummaryCard.styled';
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import { InputField } from '../InputField/InputField';
import { Button } from '../Button/Button';
const OrderSummaryCard = () => {

    return (
        <StyledOrderSummary>
            <TextParagraph text={'Order Summary'} subText={true} />
            <div className="order-details">
                <p>Subtotal: <span>$565</span></p>
                <p>Discount (-20%): <span>-$113</span></p>
                <p>Delivery Fee: <span>$15</span></p>
                <p>Total: <span>$467</span></p>
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
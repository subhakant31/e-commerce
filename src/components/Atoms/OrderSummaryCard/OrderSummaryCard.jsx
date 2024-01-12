import { StyledOrderSummary } from "./OrderSummaryCard.styled";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";
import { UserCartContext } from "../../../contexts/userCartContext";
import { useContext, useMemo } from "react";
import { centsToDollars } from "../../../helperFunctions";

const OrderSummaryCard = () => {
  const [userCart] = useContext(UserCartContext);

  const memoizedTotalAmount = useMemo(() => {
    return userCart
      .reduce((totalSum, cartItem) => {
        const itemSum = +(
          centsToDollars(cartItem.item.retail_price_cents) * cartItem.quantity
        );
        return totalSum + itemSum;
      }, 0)
      .toFixed(2);
  }, [userCart]);

  return (
    <StyledOrderSummary>
      <TextParagraph text={"Order Summary"} subText={true} />
      <div className='order-details'>
        <p>
          Subtotal: <span>${memoizedTotalAmount}</span>
        </p>
        <p>
          Discount: <span>0</span>
        </p>
        <p>
          Delivery Fee: <span>0</span>
        </p>
        <p>
          Total: <span>${memoizedTotalAmount}</span>
        </p>
      </div>
      <div className='order-button-section'>
        <div className='order-button'>
          <InputField />
          <Button text='Apply' className='' />
        </div>
        <Button text='Go to Checkout' className='' />
      </div>
    </StyledOrderSummary>
  );
};

export default OrderSummaryCard;

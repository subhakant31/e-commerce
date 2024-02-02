import { useEffect } from "react";
import { StyledOrderSummary } from "./OrderSummaryCard.styled";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import { InputField } from "../../Atoms/InputField/InputField";
import { Button } from "../../Atoms/Button/Button";
import { UserCartContext } from "../../../contexts/userCartContext";
import { useContext, useMemo, useState } from "react";
import { centsToDollars } from "../../../helperFunctions";
import { availableCoupons } from "../../../data/couponsData";
import { toast } from "react-toastify";
import {
  buttonText,
  notificationText,
} from "../../../utils/constant/string-const";

const OrderSummaryCard = () => {
  const [userCart] = useContext(UserCartContext);
  const [couponCode, setCouponCode] = useState(() => {
    // Initialize couponCode from localStorage or default to an empty string
    const storedCouponCode = localStorage.getItem("couponCode");
    return storedCouponCode || "";
  });
  const [discount, setDiscount] = useState(() => {
    // Initialize discount from localStorage or default to 0
    const storedDiscount = localStorage.getItem("discount");
    return storedDiscount ? parseFloat(storedDiscount) : 0;
  });

  const [couponCodeApplied, setCouponCodeApplied] = useState(() => {
    if (couponCode !== "") {
      return true;
    } else {
      return false;
    }
  });

  const memoizedSubtotal = useMemo(() => {
    return userCart.reduce((totalSum, cartItem) => {
      const itemSum =
        centsToDollars(cartItem.item.retail_price_cents) * cartItem.quantity;
      return totalSum + itemSum;
    }, 0);
  }, [userCart]);

  const discountedAmount = useMemo(() => {
    return (memoizedSubtotal * discount) / 100;
  }, [memoizedSubtotal, discount]);

  const memoizedTotalAmount = useMemo(() => {
    return (memoizedSubtotal - discountedAmount).toFixed(2);
  }, [memoizedSubtotal, discountedAmount]);

  const applyCouponLogic = () => {
    const appliedCoupon = availableCoupons.find(
      (coupon) => coupon.coupon === couponCode
    );

    if (appliedCoupon) {
      toast.success(
        `Coupon ${appliedCoupon.coupon} of discount ${appliedCoupon.discount}% is applied `
      );
      setCouponCodeApplied(true);
      setDiscount(appliedCoupon.discount);
    } else {
      setDiscount(0);
      setCouponCodeApplied(false);
      toast.error(notificationText.orderSummaryNotification.error);
    }
  };

  const applyCoupon = (e) => {
    if (e.key === "Enter" || e.key === "Return") {
      applyCouponLogic();
    }
  };

  const handleApplyButtonClick = () => {
    applyCouponLogic();
  };

  function removeCouponCode() {
    setDiscount(0);
    setCouponCode("");
    setCouponCodeApplied(false);
    toast.success(notificationText.couponRemoved);
  }

  useEffect(() => {
    localStorage.setItem("couponCode", couponCode);
  }, [couponCode]);

  useEffect(() => {
    localStorage.setItem("discount", discount.toString());
  }, [discount]);

  return (
    <StyledOrderSummary>
      <TextParagraph text='Order Summary' subText={true} />
      <div className='order-details'>
        <p>
          Subtotal: <span>${memoizedSubtotal.toFixed(2)}</span>
        </p>
        <p>
          Discount:{" "}
          <span className="remove-btn-wrapper">
            {couponCodeApplied && (
              <Button
                className={"remove-coupon-btn"}
                onClick={removeCouponCode}
                type={"remove-coupon"}
                text={notificationText.couponText}
              ></Button>
            )}{" "}
            ${discountedAmount.toFixed(2)} (-{discount}%)
          </span>
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
          <InputField
            placeholder={"enter coupon code"}
            onChange={(ev) => setCouponCode(ev.target.value)}
            inputFieldType={"coupon"}
            value={couponCode}
            onKeyDown={applyCoupon}
          />
          <Button
            text={buttonText.applyText}
            onClick={handleApplyButtonClick}
            title={buttonText.applyNow}
          />
        </div>
        <Button text={buttonText.checkOut} className='checkout-button' />
      </div>
    </StyledOrderSummary>
  );
};

export default OrderSummaryCard;

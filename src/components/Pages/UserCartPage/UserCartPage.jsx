import { Heading } from "../../Atoms/Heading/Heading";
import { StyledUserCart } from "./UserCartPage.styled";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Atoms/Button/Button";
import { useContext, useState } from "react";
import { UserCartContext } from "../../../contexts/userCartContext";
import OrderSummaryCard from "../../Molecules/OrderSummaryCard/OrderSummaryCard";
import { ErrorText } from "../../Atoms/ErrorText/ErrorText";
import { toast } from "react-toastify";
import ConfirmationDialogue from "../../Molecules/ConfirmationDialogue/ConfirmationDialogue";
import { buttonText, errorText } from "../../../utils/constant/string-const";
import { DetailCard } from "../../Molecules/DetailCard/DetailCard";

const UserCartPage = () => {
  const [userCart, setUserCart] = useContext(UserCartContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const navigate = useNavigate();

  const deleteItemFromCart = (id) => {
    setUserCart((prevUserCart) =>
      prevUserCart.filter((item) => item.item.id !== id)
    );
    toast.success(`Item ${id} Deleted`);
    closeConfirmation();
  };

  const closeConfirmation = () => {
    setItemToDelete(null);
    setShowConfirmation(false);
  };

  return (
    <StyledUserCart>
      <Heading size='medium' text={"Your cart"} centeredText={true} />
      {userCart.length === 0 ? (
        <div className='page-error-dialogue'>
          <ErrorText
            text={errorText.noItemText}
            size={"medium"}
            color={"black"}
          ></ErrorText>
          <Button
            text={buttonText.browseProducts}
            type={"primary"}
            title={buttonText.browseProducts}
            onClick={() => {
              navigate("/products");
            }}
            className={"navigate-home"}
          ></Button>
        </div>
      ) : (
        <div className='order-summary-card'>
          <DetailCard
            itemToDelete={itemToDelete}
            setItemToDelete={setItemToDelete}
            showConfirmation={showConfirmation}
            setShowConfirmation={setShowConfirmation}
          />
          <OrderSummaryCard />
        </div>
      )}
      {showConfirmation && (
        <ConfirmationDialogue
          onConfirm={() => deleteItemFromCart(itemToDelete)}
          onCancel={closeConfirmation}
          text={"Do you want to delete the item ?"}
        />
      )}
    </StyledUserCart>
  );
};

export default UserCartPage;

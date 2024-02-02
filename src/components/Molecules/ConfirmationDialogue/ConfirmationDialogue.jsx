import React from "react";
import { Heading } from "../../Atoms/Heading/Heading";
import { Button } from "../../Atoms/Button/Button";
import { StyledConfirmationDialogue } from "./ConfirmationDialogue.styled";
import { buttonText } from "../../../utils/constant/string-const";
const ConfirmationDialogue = ({ onConfirm, onCancel, text }) => {
  return (
    <StyledConfirmationDialogue>
      <div className='dialogue-container'>
        <Heading text={text} size={"small"}>
          {" "}
        </Heading>
        <div className='dialogue-btn-container'>
          <Button
            text={buttonText.confirmationButton.confirm}
            onClick={onConfirm}
            type={"primary"}
            className={"confirmation-btn"}
          />
          <Button
            type={"secondary"}
            text={buttonText.confirmationButton.notConfirm}
            onClick={onCancel}
            className={"confirmation-btn"}
          />
        </div>
      </div>
    </StyledConfirmationDialogue>
  );
};

export default ConfirmationDialogue;

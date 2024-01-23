import React from 'react';
import { StyledErrorPage } from "./ErrorPage.styled";
import { ErrorText } from '../../Atoms/ErrorText/ErrorText';
import { errorData } from "../../../data/pageData";
import { errorText } from '../../../utils/constant/string-const';


const ErrorPage = () => {

    return (
        <StyledErrorPage>
             <img
            className='error-image'
            src={errorData.errorImage.image}
            alt={errorData.errorImage.imageAlt}
          />
            <ErrorText
                text={errorText.errorPageText}
                size={"medium"}
                color={"black"} />
        </StyledErrorPage>
    );
};

export default ErrorPage;

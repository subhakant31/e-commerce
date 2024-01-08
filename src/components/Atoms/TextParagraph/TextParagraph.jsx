import { StyledTextParagraph } from "./TextParagraph.styled";
function TextParagraph({ text }) {
  return (
    <StyledTextParagraph className='sub-heading'>
      <p className='sub-heading'>{text}</p>
    </StyledTextParagraph>
  );
}

export default TextParagraph;

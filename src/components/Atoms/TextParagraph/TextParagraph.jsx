import { StyledTextParagraph } from "./TextParagraph.styled";
function TextParagraph({ text, subText }) {
  return (
    <StyledTextParagraph subText={subText}>
      <p className='sub-heading'>{text}</p>
    </StyledTextParagraph>
  );
}

export default TextParagraph;

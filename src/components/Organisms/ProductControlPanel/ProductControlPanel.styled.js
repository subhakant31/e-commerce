import styled from "styled-components";
export const StyledControlPanel = styled.div`
  max-width: 295px;
  .heading {
    display: flex;
    justify-content: space-between;
    padding: 20px 24px 24px 24px;
    font-family: Satoshi;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    border: 1px solid rgb(0, 0, 0, 0.2);

    h3 {
      margin-right: 166px;
    }
  }

  .filter-heading {
    display: flex;
    justify-content: space-between;
    padding: 20px 24px;
    font-family: Satoshi;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }

  .filter-contents {
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
  }

  .color-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
`;

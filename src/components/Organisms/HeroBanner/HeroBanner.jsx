import React from "react";
import { StyledHeroBanner } from "./HeroBanner.styled";
import { headerData } from "../../../data/pageData";
import { Heading } from "../../Atoms/Heading/Heading";
import { Button } from "../../Atoms/Button/Button";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import { useNavigate } from "react-router-dom";

function HeroBanner(props) {
  const heroBannerData = headerData.heroBanner;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the '/products' route on button click
    navigate("/products");
  };

  return (
    <StyledHeroBanner>
      <div className='hero-image-container'>
        <div className='banner-contents-wrapper'>
          <Heading size={"large"} text={heroBannerData.heading} />
          <TextParagraph
            text={heroBannerData.subHeading}
            subText={true}
          ></TextParagraph>
          <Button
            text='shop now'
            className='shop-now-btn'
            onClick={handleButtonClick}
          />
          <ul className='stats-list'>
            {heroBannerData.stats.map((item, key) => {
              return (
                <li key={key}>
                  <span className='stat-value'>{item.value}</span>
                  <span className='stat-title'>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <picture>
          <source media="(max-width:1200px)" srcSet={heroBannerData.smallerImage}>
          </source>
          <img
          className='hero-image'
          src={heroBannerData.defaultImage}
          alt={heroBannerData.imageAlt}
        />
        </picture>
      </div>
    </StyledHeroBanner>
  );
}

export default HeroBanner;

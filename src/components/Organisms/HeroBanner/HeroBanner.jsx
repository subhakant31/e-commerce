import React from "react";
import { StyledHeroBanner } from "./HeroBanner.styled";
import { headerData } from "../../../data/pageData";
import { Heading } from "../../Atoms/Heading/Heading";
import { Button } from "../../Atoms/Button/Button";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import { useNavigate } from "react-router-dom";
import { buttonText } from "../../../utils/constant/string-const";
import { device } from "../../../utils/constant/style-const";

function HeroBanner(props) {
  const heroBannerData = headerData.heroBanner;
  const navigate = useNavigate();

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
            text= {buttonText.shopNow}
            className='shop-now-btn'
            title={buttonText.shopNow}
            onClick={() => {
              navigate("/products");
            }}
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
          <source
            media={device.laptop}
            srcSet={heroBannerData.smallerImage}
          ></source>
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

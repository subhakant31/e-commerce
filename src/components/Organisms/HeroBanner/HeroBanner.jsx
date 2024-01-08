import { StyledHeroBanner } from "./HeroBanner.styled";
import { headerData } from "../../../data/pageData";
import { Heading } from "../../Atoms/Heading/Heading";
import { Button } from "../../Atoms/Button/Button";
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
function HeroBanner(props) {
  const heroBannerData = headerData.heroBanner;
  console.log(heroBannerData);
  return (
    <StyledHeroBanner>
      <div className='hero-image-container'>
        <div className='banner-contents-wrapper'>
          <Heading primary={true} text={heroBannerData.heading} />
          <TextParagraph text={heroBannerData.subHeading} subText={true}></TextParagraph>
          <Button text='shop now' />
          <ul className='stats-list'>
            {heroBannerData.stats.map((item, key) => {
              return (
                <li>
                  <span className='stat-value'>{item.value}</span>
                  <span className='stat-title'>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          className='hero-image'
          src={heroBannerData.image}
          alt={heroBannerData.imageAlt}
        />
      </div>
    </StyledHeroBanner>
  );
}

export default HeroBanner;

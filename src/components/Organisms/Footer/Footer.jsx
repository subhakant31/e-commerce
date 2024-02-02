import { Link } from "react-router-dom";
import React from 'react';
import { footerData as FooterData } from '../../../data/pageData';
import { FooterContainer } from './Footer.styled'
import TextParagraph from "../../Atoms/TextParagraph/TextParagraph";
import { Heading } from '../../Atoms/Heading/Heading';

const Footer = () => {
  const { logo, about, bottom, links, icons } = FooterData;
  return (
    <FooterContainer>
      <div className='footer-wrapper'>
        <div className='left-container'>
          <img src={logo.src} alt={logo.alt} width={logo.width} />
          <TextParagraph text={about.content} subText={false} />
          <div className='social-icons'>
            {icons.map((item, index) => (
              <Link to={item.url} key={index}>{item.icon}</Link>
            ))}
          </div>
        </div>
        <div className='right-container'>
          {links.map((item, index) => {
            return (<div key={index}>
              <Heading text={item.title} size={"small"} />
              <ul>
                {item.items.map((item, i) => (
                  <li key={i}><Link to={item.url}>{item.text}</Link></li>
                ))}
              </ul>
            </div>)
          })}
        </div>
      </div>
      <div className='footer-bottom'>
        <p>{bottom.copyright}</p>
        <div className='payment-cards'>
          {bottom.paymentCards.map((item, index) => (
            <div key={index}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>

      </div>
    </FooterContainer>
  );
};

export default Footer;
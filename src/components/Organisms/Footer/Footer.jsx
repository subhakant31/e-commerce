import React from 'react';
import { footerData as FooterData } from '../../../data/pageData';
import { FooterContainer } from './Footer.styled'


const Footer = () => {
  const { logo, about, bottom, links, icons } = FooterData;
  return (
    <FooterContainer>
      <div className='footer-wrapper'>
        <div className='left-container'>
          <img src={logo.src} alt={logo.alt} width={logo.width} />
          <p>{about.content}</p>
          <div className='social-icons'>
          {icons.map((item, index) => (
            <div key={index}>
              <a href={item.url}>{item.icon}</a>
            </div>
          ))}
        </div>
        </div>
        <div className='right-container'>
          {links.map((item, index) => {
            return (<div key={index}>
              <h4>{item.title}</h4>
              <ul>
                {item.items.map((item, i) => (
                  <li key={i}><a href={item.url}>{item.text}</a></li>
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
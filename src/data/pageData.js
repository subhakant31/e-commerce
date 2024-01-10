import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/icons/logo.svg";
import { BiCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";

import Applecard from "../assets/paymentCards/Apple.png"
import Googlecard from "../assets/paymentCards/Google.svg"
import Mastercard from "../assets/paymentCards/Master.svg"
import Paypalcard from "../assets/paymentCards/Paypal.svg"
import Visacard from "../assets/paymentCards/Visa.svg"
export const headerData = {
  logo: {
    icon: logo,
    alt: "company logo",
  },
  heroBanner: {
    image: "./assets/hero-image.png",
    imageAlt : 'man and a woman posing for image',
    heading: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    subHeading:
      "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
    stats: [
      {
        title: "international brands",
        value: "200+",
      },
      {
        title: "high-quality products",
        value: "2,000+",
      },
      {
        title: "happy customers",
        value: "30,000+",
      },
    ],
  },
  navItems: [
    {
      title: "shop",
      href: "/products",
    },
    {
      title: "new arrivals",
      href: "/latest-products",
    },
    {
      title: "on sale",
      href: "/latest-products",
    },
    {
      title: "brands",
      href: "/all-brands",
    },
  ],
  searchBar: {
    placeHolder: "search for products",
    icon: "FaSearch",
  },
  icons: [<BiCart />, <VscAccount />],
};

export const footerData = {
  logo: {
    src: logo,
    alt: 'Company Logo',
    width: 100,
  },
  about: {
    content:
      "We have clothes that suits your style and which you’re proud to wear. From women to men.",
  },
  links: [
    {
      title: "Company",
      items: [
        { text: "About", url: "/" },
        { text: "Features", url: "/" },
        { text: "Works", url: "/" },
        { text: "Career", url: "/" },
      ],
    },
    {
      title: "Help",
      items: [
        { text: "Customer Support", url: "/" },
        { text: "Delivery Details", url: "/" },
        { text: "Terms & Conditions ", url: "/" },
        { text: "Privacy Policy", url: "/" },
      ],
    },
    {
      title: "Faq",
      items: [
        { text: "Account", url: "/" },
        { text: "Manage Deliveries", url: "/" },
        { text: " Orders", url: "/" },
        { text: "Payments", url: "/" },
      ],
    }
  ],
  icons: [
    { icon: <FaFacebook />, url: "/" },
    { icon: <FaTwitter />, url: "/" },
    { icon: <FaInstagram />, url: "/" },
  ],
  bottom: {
    copyright:
      "Shop.co © 2000-2023, All Rights Reserved",
    paymentCards: [
      {src: Applecard, alt: 'Apple Card'},
      {src: Googlecard, alt: 'Google Card'},
      {src: Mastercard, alt: 'Master Card'},
      {src: Paypalcard, alt: 'Paypal Card'},
      {src: Visacard, alt: 'Visa Card'},
    ]
  },

};


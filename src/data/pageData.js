import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/icons/logo.svg";
import { BiCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
export const headerData = {
  logo: {
    icon: logo,
    alt: "company logo",
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
      {src: './assests/paymentCards/Apple.png', alt: 'Apple Card'},
      {src: './assests/paymentCards/Google.svg', alt: 'Google Card'},
      {src: './assests/paymentCards/Master.svg', alt: 'Master Card'},
      {src: './assests/paymentCards/Paypal.svg', alt: 'Paypal Card'},
      {src: './assests/paymentCards/Visa.svg', alt: 'Visa Card'},
    ]
  },

};

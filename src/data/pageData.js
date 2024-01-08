import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/icons/logo.svg";
import { BiCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
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
  about: {
    title: "About Us",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis ac nibh luctus sagittis vel id ex.",
  },
  contact: {
    title: "Contact Us",
    email: "info@example.com",
    phone: "+1 (123) 456-7890",
    address: "123 Main Street, Cityville, State, 12345",
  },
  links: {
    title: "Quick Links",
    items: [
      { text: "Home", url: "#" },
      { text: "Products", url: "#" },
      { text: "Services", url: "#" },
      { text: "Contact", url: "#" },
    ],
  },
  social: {
    title: "Follow Us",
    icons: [
      { icon: <FaFacebook />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
      { icon: <FaInstagram />, url: "#" },
    ],
  },
  bottom: {
    copyright:
      "&copy; 2024 Your Website. All Rights Reserved. | Designed by Your Company",
  },
};

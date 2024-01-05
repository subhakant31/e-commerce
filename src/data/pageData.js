import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const footerData = {
    about: {
        title: "About Us",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis ac nibh luctus sagittis vel id ex."
    },
    contact: {
        title: "Contact Us",
        email: "info@example.com",
        phone: "+1 (123) 456-7890",
        address: "123 Main Street, Cityville, State, 12345"
    },
    links: {
        title: "Quick Links",
        items: [
            { text: "Home", url: "#" },
            { text: "Products", url: "#" },
            { text: "Services", url: "#" },
            { text: "Contact", url: "#" }
        ]
    },
    social: {
        title: "Follow Us",
        icons: [
            { icon: <FaFacebook />, url: "#" },
            { icon: <FaTwitter />, url: "#" },
            { icon: <FaInstagram />, url: "#" }
        ]
    },
    bottom: {
        copyright: "&copy; 2024 Your Website. All Rights Reserved. | Designed by Your Company"
    }
};

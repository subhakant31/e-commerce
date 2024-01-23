//Veriables related about font weights
export const fontWeight = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  };
  
  export const color = {

    transparent: "rgba(0, 0, 0, 0)",
    //  White color variations
    white: "#ffffff",
    white100: "rgb(255, 255, 255, 0.8)",
  
    // Gray color variations
    gray94: "#f0f0f0",
    gray: "#f4f4f4",
    lightGray: "#D3D3D3",
    gray500: "#F2F0F1",
    gray700: "#dddddd",
  
    // Black color variations
    black: "#000000",
    black500: "#F0EEED",
    black100: "rgba(0, 0, 0, 0.1)",
    black200: "rgb(0, 0, 0, 0.2)",
    black700: "rgba(0, 0, 0, 0.10)",

    // Red Color variations
    red: "#ff3d00",
    red100: "rgb(255, 0, 0)",
  };
  
  export const fontSize = {
    font14: "14px",
    font16: "16px",
    font18: "18px",
    font20: "20px",
    font22: "22px",
    font24: "24px",
    font28: "28px",
    font30: "30px",
    font32: "32px",
    font34: "34px",
    font36: "36px",
    font40: "40px",
    font42: "42px",
    font50: "50px",
    font64: "64px",
    
    // Body font sizes
    body: "1rem",
  
  };
  
  
  const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '540px',
    tablet: '767px',
    laptop: '1200px',
    laptopL: '1440px'
  }
  
  
  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    tabletMin: `(min-width: ${size.tablet})`,
  };
  
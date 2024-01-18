import { colorHashes } from "./data/pageData";
/* 
  @function : centsToDollars'
  @description : converts cents value to dollar value
  @returns : dollar value (double) 
  @param : cents(integer)
*/

export function centsToDollars(cents) {
  if (typeof cents !== "number") {
    return null;
  }

  const dollars = cents / 100;
  return dollars.toFixed(2);
}

/* 
  @function : formatDateFromUnixTimestamp
  @description : converts unix value to proper date format
  @returns : date 
  @param : unix(integer)
*/
export function formatDateFromUnixTimestamp(unixTimestamp) {
  const milliseconds = unixTimestamp * 1000;
  const date = new Date(milliseconds);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}

/* 
  @function : findAllAvailableColors
  @description : returns an array of all the available color's hashes of product based on the color names
  @returns : array of hash colors 
  @param : products object
*/
export function findAllAvailableColors(products) {
  const allColors = [];

  products.forEach((product) => {
    if (
      product.color &&
      !allColors.includes(colorHashes[product.color.toLowerCase()])
    ) {
      allColors.push(colorHashes[product.color.toLowerCase()]);
    }
  });

  return allColors;
}

/* 
  @function : findAllAvailableBrands
  @description : returns an array of all the available brands from all products array
  @returns : array of brands
  @param : products object
*/
export function findAllAvailableBrands(products) {
  const allBrands = [];

  products.forEach((product) => {
    if (product.brand_name && !allBrands.includes(product.brand_name)) {
      allBrands.push(product.brand_name);
    }
  });

  return allBrands;
}

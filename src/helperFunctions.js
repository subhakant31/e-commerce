/* 
  @function : centsToDollars'
  @description : converts cents value to dollar value
  @returns : dollar value (double) 
  @param : cents(integer)
*/

export function centsToDollars(cents) {
  if (typeof cents !== "number") {
    console.error("Input must be a number");
    return null; // or handle the error as appropriate for your application
  }

  const dollars = cents / 100;
  return dollars.toFixed(2); // Fixed to 2 decimal places
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

export function findAllAvailableColors(products) {
  const allColors = [];

  products.forEach((product) => {
    if (product.color && !allColors.includes(product.color)) {
      allColors.push(product.color);
    }
  });

  return allColors;
}

export function findAllAvailableBrands(products) {
  const allBrands = [];

  products.forEach((product) => {
    if (product.brand_name && !allBrands.includes(product.brand_name)) {
      allBrands.push(product.brand_name);
    }
  });

  return allBrands;
}

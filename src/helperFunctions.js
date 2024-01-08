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

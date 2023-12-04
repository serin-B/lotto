import { PROFIT } from "../constants/Values.js";

export const getProfit = (amount, result) => {
  let sumProfit = 0;
  for (let place in result) {
    sumProfit += result[place] * PROFIT[place];
  }

  return roundingDecimals(sumProfit / amount);
};

function roundingDecimals(number) {
  if (Number.isInteger(number)) {
    return String(number);
  }

  number = number.toFixed(2);

  if (number[number.length - 1] === "0") {
    return number.slice(0, number.length - 1);
  }

  return number;
}

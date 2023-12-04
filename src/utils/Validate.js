import { ERROR_MESSAGE } from "../constants/Messages.js";
import { LOTTO } from "../constants/Values.js";

export const isValidPurchaseAmount = (amount) => {
  amount = Number(amount);

  if (Number.isNaN(amount) || amount % LOTTO.PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  }
  if (amount > LOTTO.MAX_PURCHASE_AMOUNT) {
    throw new Error(ERROR_MESSAGE.EXCEED_MAX_PURCHASE_AMOUNT);
  }
};

export const isValidLottoNumber = (number) => {
  const lotto = number.split(",");

  if (lotto.length !== LOTTO.LENGTH) {
    throw new Error(ERROR_MESSAGE.WRONG_LOTTO_LENGTH);
  }
  if (new Set(lotto).size !== LOTTO.LENGTH) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER);
  }
  lotto.forEach((number) => {
    if (!/^([1-9]|[1-3][0-9]|4[0-5])$/.test(number)) {
      throw new Error(ERROR_MESSAGE.WRONG_LOTTO_NUMBER);
    }
  });
};

export const isValidBonusNumber = (winningNumber, bonusNumber) => {
  if (!/^([1-9]|[1-3][0-9]|4[0-5])$/.test(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.WRONG_BONUS_NUMBER);
  }
  if (winningNumber.includes(Number(bonusNumber))) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
  }
};

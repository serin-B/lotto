import { PLACE } from "../constants/Values.js";
import { isValidLottoNumber } from "../utils/Validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    isValidLottoNumber(numbers);
  }

  checkResult(winningNumber, bonusNumber) {
    const set = new Set([...this.#numbers, ...winningNumber]);
    const correct = this.#numbers.length + winningNumber.length - set.size;

    if (correct === 5 && this.#numbers.includes(bonusNumber)) {
      return PLACE[5.5];
    }

    return PLACE[correct];
  }
}

export default Lotto;

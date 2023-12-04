import Lotto from "../model/Lotto.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "../constants/Values.js";
import { MESSAGE } from "../constants/Messages.js";
import {
  isValidPurchaseAmount,
  isValidLottoNumber,
  isValidBonusNumber,
} from "../utils/Validate.js";
import { getProfit } from "../utils/ProfitCalculate.js";

class LottoMachine {
  #lottos;

  async start() {
    const amount = await this.#getAmount();

    const lottos = this.#publishLottos(amount);
    console.log(this.#lottos);
    OutputView.print(MESSAGE.SHOW_PURCHASE_HISTORY(amount));
    OutputView.printLottos(this.#lottos);

    const winningNumber = await this.#getWinningNumber();
    const bonusNumber = await this.#getBonusNumber(winningNumber);

    const result = this.#getResult(lottos, winningNumber, bonusNumber);
    const profit = getProfit(amount, result);
    OutputView.print(MESSAGE.SHOW_PROFIT(profit));
  }

  async #getAmount() {
    try {
      const amount = await InputView.getInput(MESSAGE.GET_PURCHASE_AMOUNT);

      isValidPurchaseAmount(amount);

      return Number(amount) / LOTTO.PRICE;
    } catch (error) {
      OutputView.print(error.message);
      return this.#getAmount();
    }
  }

  async #getWinningNumber() {
    try {
      const number = await InputView.getInput(MESSAGE.GET_WINNING_NUMBER);

      isValidLottoNumber(number);

      return number.split(",").map((number) => Number(number));
    } catch (error) {
      OutputView.print(error.message);
      return this.#getWinningNumber();
    }
  }

  async #getBonusNumber(winningNumber) {
    try {
      const bonusNumber = await InputView.getInput(MESSAGE.GET_BONUS_NUMBER);

      isValidBonusNumber(winningNumber, bonusNumber);

      return Number(bonusNumber);
    } catch (error) {
      OutputView.print(error.message);
      return this.#getBonusNumber();
    }
  }

  #publishLottos(count) {
    this.#lottos = new Array(count).fill(0).map((el) => this.#getLottoNumber());
    return this.#lottos.map((numbers) => new Lotto(numbers));
  }

  #getLottoNumber() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.LENGTH
    );

    return numbers.sort((a, b) => a - b);
  }

  #getResult(lottos, winningNumber, bonusNumber) {
    const result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      nothing: 0,
    };

    lottos.forEach((lotto) => {
      result[lotto.checkResult(winningNumber, bonusNumber)]++;
    });

    return result;
  }
}

export default LottoMachine;

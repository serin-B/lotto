import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async getInput(message) {
    return await Console.readLineAsync(message);
  },
};

export default InputView;

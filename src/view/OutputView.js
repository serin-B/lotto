import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      Console.print(`[${lottos[i].join(", ")}]`);
    }
  },
};

export default OutputView;

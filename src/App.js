import LottoMachine from "./controller/LottoMachine.js";

class App {
  async play() {
    const game = new LottoMachine();
    await game.start();
  }
}

export default App;

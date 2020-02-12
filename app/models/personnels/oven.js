
const PizzaMaker = require("./pizza-maker");
const { Logger } = require("../../logs/log-file");

class Oven extends PizzaMaker {

  constructor() {
    super(10000); // 10 seconds prepTime
  }

  async prepare() {
    return super.process({
      start: `Putting a pizza in the oven`,
      end: `Pizza is out of the oven!`
    })
  }

}

module.exports = Oven;

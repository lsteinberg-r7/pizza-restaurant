
const PizzaMaker = require("./pizza-maker");
const { Logger } = require("../../logs/log-file");

class Waiter extends PizzaMaker {

  constructor(name) {
    super(5000); // 10 seconds to deliver the pizza
    this.name = name;
  }

  async prepare() {
    return super.process({
      start: `Waiter ${this.name} is delivering a pizza`,
      end: `Waiter ${this.name} delivered a pizza!`
    })
  }

}

module.exports = Waiter;

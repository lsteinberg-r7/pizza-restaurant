
const PizzaMaker = require("./pizza-maker");
const { Logger } = require("../../logs/log-file");

class DoughChef extends PizzaMaker {

  constructor(name) {
    super(7000); // 7 seconds prepTime
    this.name = name;
  }

  async prepare() {
    return super.process({
      start: `Chef ${this.name} is starting to prepare a dough`,
      end: `Chef ${this.name} finished to prepare a dough`
    })
  }

}

module.exports = DoughChef;

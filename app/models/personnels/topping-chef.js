
const PizzaMaker = require("./pizza-maker");
const { Logger } = require("../../logs/log-file");

class ToppingChef extends PizzaMaker {

  constructor(name) {
    super(4000); // 4 seconds prepTime
    this.name = name;
    this.toppingCount = 0;
  }

  async prepare() {
    return super.process({
      start: `Chef ${this.name} is starting to put a topping`,
      end: `Chef ${this.name} finished to put a topping`,
      preTask: () => {
        if (this.toppingCount >= 2) {
          this.isBusy = true;
        } 
        this.toppingCount++;
      },
      postTask: () => {
        if (this.toppingCount < 2) {
          this.isBusy = false;
        }
        this.toppingCount--;
      },
    })
  }

}

module.exports = ToppingChef;


const PersonnelScheduler = require("./scheduler").default;
const ToppingChef = require("../personnels/topping-chef").default;

class ToppingScheduler extends PersonnelScheduler {

  constructor(...names) {
    super(names, ToppingChef);
  }

  push(order) {
    super.push(order);
  }

}

module.exports = ToppingScheduler;

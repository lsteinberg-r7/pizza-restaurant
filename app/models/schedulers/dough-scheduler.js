
const PersonnelScheduler = require("./scheduler").default;
const DoughChef = require("../personnels/dough-chef").default;

class DoughScheduler extends PersonnelScheduler {

  constructor(...names) {
    super(names, DoughChef);
  }

  push(order) {
    return super.push(order);
  }

}

module.exports = DoughScheduler;

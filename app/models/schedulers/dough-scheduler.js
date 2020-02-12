
const PersonnelScheduler = require("./scheduler").default;
const DoughChef = require("../personnels/dough-chef").default;

class DoughScheduler extends PersonnelScheduler {

  constructor(...names) {
    super();
    this.doughGroup = names.map(name => new DoughChef(name));
  }

  push(order) {
    const availableDoughs = this.doughGroup.filter(doughChef => !doughChef.isBusy);
    if (!availableDoughs.length) {
      this.waitingOrders.push(order);
    }
    return availableDoughs[0].prepare(order);
  }

}

module.exports = DoughScheduler;

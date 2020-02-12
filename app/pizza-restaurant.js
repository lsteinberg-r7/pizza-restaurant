
const DoughChef = require("./models/personnels/dough-chef").default;
const ToppingChef = require("./models/personnels/topping-chef").default;
const Oven = require("./models/personnels/oven").default;
const Waiter = require("./models/personnels/waiter").default;

class PizzaRestaurant {

  constructor() {
    this.doughChefs = ["D1", "D2"].map(name => new DoughChef(name));
    this.toppingChefs = ["T1", "T2", "T3"].map(name => new ToppingChef(name));
    this.oven = new Oven();
    this.waiters = ["W1", "W2"].map(name => new Waiter(name));
  }

  listenToClients() {

  }

}

module.exports = PizzaRestaurant;
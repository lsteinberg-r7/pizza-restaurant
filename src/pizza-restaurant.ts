
import { DoughChef } from "./models/personnels/dough-chef";
import { ToppingChef } from "./models/personnels/topping-chef";
import { Oven } from "./models/personnels/oven";
import { Waiter } from "./models/personnels/waiter";

import { DoughScheduler } from "./models/schedulers/dough-scheduler";

export class PizzaRestaurant {

  doughChefScheduler: DoughScheduler;
  toppingChefs: any[];
  oven: any;
  waiters: any[]

  constructor() {
    this.doughChefScheduler = new DoughScheduler("D1", "D2");
    this.toppingChefs = ["T1", "T2", "T3"].map(name => new ToppingChef(name));
    this.oven = new Oven();
    this.waiters = ["W1", "W2"].map(name => new Waiter(name));
  }

  order(orders) {
    
  }

}


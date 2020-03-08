import { EventEmitter } from "events";
import { v4 } from "uuid";
import { Pizza } from "../models/pizza";
import { doughMaster } from "../models/masters/dough-master";
import { waiterMaster } from "../models/masters/waiter-master";
import { clock } from "./clock.manager";
import { Logger } from "../logs/logger";

class PizzaManager extends EventEmitter {

  constructor() {
    super();
    waiterMaster.on("ready", (pizza: Pizza) => {
      const time = clock.toc(pizza.id);
      Logger.info(`Pizza ${pizza.id} was done in ${time} seconds`);
    })
  }

  push(orders: any[]) {
    for (const order of orders) {
      const name = order.name || v4();
      clock.tic(name);
      doughMaster.push(new Pizza(name, order.toppings || []));
    }
  }

}

export const pizzaManager = new PizzaManager();

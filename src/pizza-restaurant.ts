
import { DoughChef } from "./models/personnels/dough-chef";
import { ToppingChef } from "./models/personnels/topping-chef";
import { Oven } from "./models/personnels/oven";
import { Waiter } from "./models/personnels/waiter";

import { pizzaManager } from "./managers/pizza.manager";
import { Logger } from "./logs/logger";

class PizzaRestaurant {

  constructor() {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
  }
  
  open() {
    Logger.info("######### Pizza restaurant is open ##########");
    process.stdin.on("data", (data: any) => {
      try {
        const orders = JSON.parse(data);
        pizzaManager.push(orders);
      } catch (err) {
        console.error("Not a valid pizza order!");
        console.error(err);
      }
    })
    process.on("SIGINT", () => {
      Logger.info("######### Pizza restaurant is closed ##########");
      process.exit(0);
    })
  }

}

const pizzaRestaurant = new PizzaRestaurant();
pizzaRestaurant.open();

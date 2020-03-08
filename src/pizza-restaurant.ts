
import { DoughChef } from "./models/personnels/dough-chef";
import { ToppingChef } from "./models/personnels/topping-chef";
import { Oven } from "./models/personnels/oven";
import { Waiter } from "./models/personnels/waiter";

import { pizzaManager } from "./manager/pizza.manager";

class PizzaRestaurant {

  constructor() {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
  }
  
  open() {
    process.stdin.on("data", (data: any) => {
      try {
        const order = JSON.parse(data);
        pizzaManager.push(order);
      } catch (err) {
        console.error("Not a valid pizza order!");
        console.error(err);
      }
    })
  }

}

const pizzaRestaurant = new PizzaRestaurant();
pizzaRestaurant.open();

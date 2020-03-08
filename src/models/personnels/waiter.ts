
import { PizzaPersonnel } from "./personnel";
import { Pizza } from "../pizza";

export class Waiter extends PizzaPersonnel {

  name: string;

  constructor(name: string) {
    super(5000); // 10 seconds to deliver the pizza
    this.name = name;
  }

  async prepare(pizza: Pizza): Promise<any> {
    return super.process({
      start: `Waiter ${this.name} is delivering pizza ${pizza.id}`,
      end: `Waiter ${this.name} delivered pizza ${pizza.id}!`
    })
  }

}


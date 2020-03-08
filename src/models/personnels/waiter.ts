
import { PizzaPersonnel } from "./personnel";
import { Pizza } from "../pizza";
import { PizzaConfig } from "../../config/config";

export class Waiter extends PizzaPersonnel {

  name: string;

  constructor(name: string) {
    super(PizzaConfig.waiter.prepTime);
    this.name = name;
  }

  async prepare(pizza: Pizza): Promise<any> {
    return super.process({
      start: `Waiter ${this.name} is delivering pizza ${pizza.id}`,
      end: `Waiter ${this.name} delivered pizza ${pizza.id}!`
    })
  }

}


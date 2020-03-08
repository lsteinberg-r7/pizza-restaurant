
import { PizzaPersonnel } from "./personnel";
import { Pizza } from "../pizza";

export class Oven extends PizzaPersonnel {

  name: string;

  constructor(name: string) {
    super(10000); // 10 seconds prepTime
    this.name = name;
  }

  async prepare(pizza: Pizza): Promise<any> {
    return super.process({
      start: `Putting pizza ${pizza.id} in oven ${this.name}`,
      end: `Pizza ${pizza.id} is out of oven ${this.name}`
    })
  }

}


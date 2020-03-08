
import { PizzaPersonnel } from "./personnel";
import { Pizza } from "../pizza";
import { PizzaConfig } from "../../config/config";

export class DoughChef extends PizzaPersonnel {
  
  name: string;
  
  constructor(name: string) {
    super(PizzaConfig.dough.prepTime);
    this.name = name;
  }
  
  async prepare(pizza: Pizza): Promise<any> {
    return super.process({
      start: `Chef ${this.name} is starting to prepare a dough for pizza ${pizza.id}`,
      end: `Chef ${this.name} finished to prepare a dough for pizza ${pizza.id}`
    })
  }
}


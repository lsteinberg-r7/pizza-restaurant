
import { PizzaMaker } from "./pizza-maker";
import { Logger } from "../../logs/logger";

export class DoughChef extends PizzaMaker {

  name: string;

  constructor(name) {
    super(7000); // 7 seconds prepTime
    this.name = name;
  }

  async prepare() {
    return super.process({
      start: `Chef ${this.name} is starting to prepare a dough`,
      end: `Chef ${this.name} finished to prepare a dough`
    })
  }

}


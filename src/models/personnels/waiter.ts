
import { PizzaMaker } from "./pizza-maker";
import { Logger } from "../../logs/logger";

export class Waiter extends PizzaMaker {

  name: string;

  constructor(name) {
    super(5000); // 10 seconds to deliver the pizza
    this.name = name;
  }

  async prepare() {
    return super.process({
      start: `Waiter ${this.name} is delivering a pizza`,
      end: `Waiter ${this.name} delivered a pizza!`
    })
  }

}


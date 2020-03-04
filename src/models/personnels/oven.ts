
import { PizzaMaker } from "./pizza-maker";
import { Logger } from "../../logs/logger";

export class Oven extends PizzaMaker {

  constructor() {
    super(10000); // 10 seconds prepTime
  }

  async prepare() {
    return super.process({
      start: `Putting a pizza in the oven`,
      end: `Pizza is out of the oven!`
    })
  }

}


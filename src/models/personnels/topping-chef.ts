
import { PizzaMaker } from "./pizza-maker";
import { Logger } from "../../logs/logger";

export class ToppingChef extends PizzaMaker {

  name: string;
  toppingCount: number;

  constructor(name) {
    super(4000); // 4 seconds prepTime
    this.name = name;
    this.toppingCount = 0;
  }

  async prepare() {
    return super.process({
      start: `Chef ${this.name} is starting to put a topping`,
      end: `Chef ${this.name} finished to put a topping`,
      preTask: () => {
        if (this.toppingCount >= 2) {
          this.isBusy = true;
        } 
        this.toppingCount++;
      },
      postTask: () => {
        if (this.toppingCount < 2) {
          this.isBusy = false;
        }
        this.toppingCount--;
      },
    })
  }

}


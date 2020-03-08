
import { PizzaPersonnel } from "./personnel";
import { Pizza } from "../pizza";

export class ToppingChef extends PizzaPersonnel {

  name: string;
  toppingCount: number;

  constructor(name: string) {
    super(4000); // 4 seconds prepTime
    this.name = name;
    this.toppingCount = 0;
  }

  async prepare(pizza: Pizza): Promise<any> {
    return super.process({
      start: `Chef ${this.name} is starting to put toppings on pizza ${pizza.id}`,
      end: `Chef ${this.name} finished to put toppings on pizza ${pizza.id}`,
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


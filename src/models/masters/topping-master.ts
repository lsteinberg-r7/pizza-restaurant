
import { PersonnelMaster } from "./master";
import { ToppingChef } from "../personnels/topping-chef";
import { PizzaConfig } from "../../config/config";
import { ovenMaster } from "./oven-master";
import { Pizza } from "../pizza";

class ToppingMaster extends PersonnelMaster {

  constructor(names: string[]) {
    super(names, ToppingChef);
    this.on("ready", newPizza => {
      newPizza.topped = true;
      ovenMaster.push(newPizza);
    })
  }

  push(pizza: Pizza) {
    return super.push(pizza);
  }

}

export const toppingMaster = new ToppingMaster(PizzaConfig.topping);

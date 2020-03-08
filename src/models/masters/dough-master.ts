
import { PersonnelMaster } from "./master";
import { DoughChef } from "../personnels/dough-chef";
import { PizzaConfig } from "../../config/config";
import { toppingMaster } from "./topping-master";
import { Pizza } from "../pizza";

class DoughMaster extends PersonnelMaster {

  constructor(names: string[]) {
    super(names, DoughChef);
    this.on("ready", pizza => {
      pizza.doughed = true;
      toppingMaster.push(pizza);
    })
  }

  push(pizza: Pizza) {
    return super.push(pizza);
  }

}

export const doughMaster = new DoughMaster(PizzaConfig.dough);


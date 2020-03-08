
import { PersonnelMaster } from "./master";
import { PizzaConfig } from "../../config/config";
import { Oven } from "../personnels/oven";
import { waiterMaster } from "./waiter-master";
import { Pizza } from "../pizza";

class OvenMaster extends PersonnelMaster {

  constructor(names: string[]) {
    super(names, Oven);
    this.on("ready", pizza => {
      pizza.ovened = true;
      waiterMaster.push(pizza);
    })
  }

  push(pizza: Pizza) {
    return super.push(pizza);
  }

}

export const ovenMaster = new OvenMaster(PizzaConfig.oven);

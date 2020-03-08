
import { PersonnelMaster } from "./master";
import { PizzaConfig } from "../../config/config";
import { Waiter } from "../personnels/waiter";
import { Logger } from "../../logs/logger";
import { Pizza } from "../pizza";

class WaiterMaster extends PersonnelMaster {

  constructor(names: string[]) {
    super(names, Waiter);
    this.on("ready", newPizza => {
      newPizza.waitered = true;
      Logger.info(`Pizza ${newPizza.id} is served!`);
    })
  }

  push(pizza: Pizza) {
    return super.push(pizza);
  }

}

export const waiterMaster = new WaiterMaster(PizzaConfig.waiter.names);

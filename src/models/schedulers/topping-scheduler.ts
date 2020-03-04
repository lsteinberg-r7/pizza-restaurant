
import { PersonnelScheduler } from "./scheduler";
import { ToppingChef } from "../personnels/topping-chef";

export class ToppingScheduler extends PersonnelScheduler {

  constructor(...names) {
    super(names, ToppingChef);
  }

  push(order) {
    super.push(order);
  }

}



import { PersonnelScheduler } from "./scheduler";
import { DoughChef } from "../personnels/dough-chef";

export class DoughScheduler extends PersonnelScheduler {

  constructor(...names) {
    super(names, DoughChef);
  }

  push(order) {
    return super.push(order);
  }

}


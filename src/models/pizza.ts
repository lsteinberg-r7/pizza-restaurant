

export class Pizza {
  
  id: string;
  toppings: string[];
  doughed: boolean;
  topped: boolean;
  ovened: boolean;
  waitered: boolean;

  constructor(id, toppings) {
    this.id = id;
    this.toppings = toppings;
    this.doughed = false;
    this.topped = false;
    this.ovened = false;
    this.waitered = false;
  }
}

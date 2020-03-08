import { EventEmitter } from "events";
import { Pizza } from "../pizza";

export class PersonnelMaster extends EventEmitter {

  group: any[];
  waitingPizzas: any[];
  private _intervalTime: number;
  private _interval: NodeJS.Timeout;

  constructor(names: string[], PersonnelType: any) {
    super();
    this.group = names.map((name: string) => new PersonnelType(name));
    this.waitingPizzas = [];
    this._intervalTime = 500;
    this._processWaitingList = this._processWaitingList.bind(this);
    this._interval = setInterval(this._processWaitingList, this._intervalTime);
  }

  kill() {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  async push(pizza: Pizza) {
    const availablePersonnels = this.group.filter(personnel => !personnel.isBusy);
    if (!availablePersonnels.length) {
      this.waitingPizzas.unshift(pizza);
    } else {
      await availablePersonnels[0].prepare(pizza);
      this.emit("ready", pizza);
    }
  }

  async _processWaitingList() {
    if (!this.waitingPizzas.length) {
      return;
    }
    const availablePersonnels = this.group.filter(personnel => !personnel.isBusy);
    if (availablePersonnels.length) {
      const pizza = this.waitingPizzas.pop();
      await availablePersonnels[0].prepare(pizza);
      this.emit("ready", pizza);
    }
  }
  
}



export class PersonnelScheduler {

  group: any[];
  waitingOrders: any[];
  private _intervalTime: number;
  private _interval: NodeJS.Timeout;

  constructor(names, PersonnelType) {
    this.group = names.map(name => new PersonnelType(name));
    this.waitingOrders = [];
    this._intervalTime = 500;
    this._processWaitingList = this._processWaitingList.bind(this);
    this._interval = setInterval(this._processWaitingList, this._intervalTime);
  }

  kill() {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  push(order) {
    const availablePersonnels = this.group.filter(personnel => !personnel.isBusy);
    if (!availablePersonnels.length) {
      this.waitingOrders.unshift(order);
    }
    availablePersonnels[0].prepare(order);
  }

  _processWaitingList() {
    const availablePersonnels = this.group.filter(personnel => !personnel.isBusy);
    if (availablePersonnels.length) {
      const order = this.waitingOrders.pop();
      availablePersonnels[0].prepare(order);
    }
  }
  
}


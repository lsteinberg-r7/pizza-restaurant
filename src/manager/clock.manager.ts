
import { EventEmitter } from "events";
import { Logger } from "../logs/logger";

class Clock extends EventEmitter {

  _pizzas: Map<string, { start?: number, ellapsed?: number }>;

  constructor() {
    super();
    this._pizzas = new Map<string, { start: number, end: number }>();
  }

  tic(id: string) {
    this._pizzas.set(id, { start: Date.now() })
  }

  toc(id: string) {
    const pizza = this._pizzas.get(id);
    pizza.ellapsed = Date.now() - pizza.start;
    this._pizzas.set(id, pizza);
    return Math.floor(pizza.ellapsed / 1000);
  }

  totalTime() {
    return Array.from(this._pizzas.values()).reduce((t, n) => { return t + n.ellapsed }, 0);
  }
}

export const clock = new Clock();

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
    pizza.ellapsed = Math.floor((Date.now() - pizza.start) / 1000);
    this._pizzas.set(id, pizza);
    return pizza.ellapsed;
  }

  totalTime() {
    return Array.from(this._pizzas.values()).reduce((t, n) => { return t + n.ellapsed }, 0);
  }
}

export const clock = new Clock();
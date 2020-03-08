
import { Logger } from "../../logs/logger";

export abstract class PizzaPersonnel {

  prepTime: number;
  isBusy: boolean;
  
  constructor(prepTime: number) {
    this.prepTime = prepTime;
    this.isBusy = false;
  }

  process(step: any) {
    Logger.info(step.start);
    return new Promise(resolve => {
      if (typeof step.preTask === "function") {
        step.preTask();
      } else {
        this.isBusy = true;
      }
      setTimeout(() => {
        Logger.info(step.end);
        if (typeof step.postTask === "function") {
          step.postTask();
        } else {
          this.isBusy = false;
        }
        resolve();
      }, this.prepTime)
    })
  }

  abstract async prepare(pizza): Promise<void>;
}


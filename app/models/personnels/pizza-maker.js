

class PizzaMaker {
  
  constructor(prepTime) {
    this.prepTime = prepTime;
    this.isBusy = false;
  }

  process(step) {
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

}

module.exports = PizzaMaker;

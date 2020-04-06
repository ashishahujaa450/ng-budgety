import { Injectable, EventEmitter } from "@angular/core";
import { Income } from "../app.model";
import {} from "events";

@Injectable({
  providedIn: "root"
})
export class IncomeService {
  private IncomeList: Income[] = [];
  public totalIncome: number = 0;

  public totalUpdate = new EventEmitter<number>();

  constructor() {}

  get getList() {
    return this.IncomeList;
  }

  addIncome(item: Income) {
    //generate id
    item.id =
      this.IncomeList.length > 0
        ? this.IncomeList[this.IncomeList.length - 1].id + 1
        : 1;

    this.IncomeList.push(item);

    //calc total
    this.calcTotalIncome();
  }

  removeIncome(id: number) {
    const index = this.IncomeList.findIndex(elm => elm.id === id);
    this.IncomeList.splice(index, 1);

    //calc total
    this.calcTotalIncome();
  }

  calcTotalIncome() {
    let amount = 0;
    this.IncomeList.forEach(elm => {
      amount += elm.amount;
    });

    this.totalIncome = amount;
    this.totalUpdate.emit(this.totalIncome);
  }
}

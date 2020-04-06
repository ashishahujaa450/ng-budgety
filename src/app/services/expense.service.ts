import { Injectable, EventEmitter } from "@angular/core";
import { Expense } from "../app.model";
import { IncomeService } from "./income.service";

@Injectable({
  providedIn: "root"
})
export class ExpenseService {
  private ExpenseList: Expense[] = [];
  public totalExpense: number = 0;

  public expenseUpdates = new EventEmitter<number>();

  constructor(private incomeService: IncomeService) {}

  get getList() {
    return this.ExpenseList;
  }

  setSinglePercentage() {
    this.ExpenseList.forEach(elm => {
      elm.singlePercentage = Math.round(
        (elm.amount / this.incomeService.totalIncome) * 100
      );
    });
  }

  addExpense(item: Expense) {
    //generate id
    item.id =
      this.ExpenseList.length > 0
        ? this.ExpenseList[this.ExpenseList.length - 1].id + 1
        : 1;

    this.ExpenseList.push(item);

    //calc total
    this.calcTotalExpense();
  }

  removeExpense(id: number) {
    const index = this.ExpenseList.findIndex(elm => elm.id === id);
    this.ExpenseList.splice(index, 1);

    //calc total
    this.calcTotalExpense();
  }

  calcTotalExpense() {
    let amount = 0;
    this.ExpenseList.forEach(elm => {
      amount += elm.amount;
    });

    this.totalExpense = amount;
    this.setSinglePercentage();
    this.expenseUpdates.emit(this.totalExpense);
  }
}

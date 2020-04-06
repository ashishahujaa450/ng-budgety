import { Component, OnInit } from "@angular/core";
import { IncomeService } from "../services/income.service";
import { Expense, Income } from "../app.model";
import { ExpenseService } from "../services/expense.service";

@Component({
  selector: "app-expense-form",
  templateUrl: "./expense-form.component.html",
  styleUrls: ["./expense-form.component.css"]
})
export class ExpenseFormComponent implements OnInit {
  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) {}

  public data = {
    type: "inc",
    description: "",
    amount: ""
  };

  ngOnInit(): void {}

  addData(ev: Event) {
    ev.preventDefault();

    const item: Expense | Income = {
      description: this.data.description,
      amount: parseInt(this.data.amount)
    };

    if (this.data.type === "inc") {
      this.incomeService.addIncome(item);
    } else if (this.data.type === "exp") {
      this.expenseService.addExpense(item);
    }

    this.data = {
      type: "inc",
      description: "",
      amount: ""
    };
  }
}

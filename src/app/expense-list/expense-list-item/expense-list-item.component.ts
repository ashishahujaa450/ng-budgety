import { Component, OnInit, Input } from "@angular/core";
import { Expense } from "src/app/app.model";
import { ExpenseService } from "src/app/services/expense.service";

@Component({
  selector: "app-expense-list-item",
  templateUrl: "./expense-list-item.component.html",
  styleUrls: ["./expense-list-item.component.css"]
})
export class ExpenseListItemComponent implements OnInit {
  @Input("item") currentItem: Expense;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {}

  removeExpense(id: number) {
    this.expenseService.removeExpense(id);
  }
}

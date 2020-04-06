import { Component, OnInit } from "@angular/core";
import { Expense } from "../app.model";
import { ExpenseService } from "../services/expense.service";

@Component({
  selector: "app-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.css"]
})
export class ExpenseListComponent implements OnInit {
  public expenseList: Expense[] = [];
  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseList = this.expenseService.getList;
  }
}

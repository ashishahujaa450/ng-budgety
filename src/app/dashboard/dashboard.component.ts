import { Component, OnInit, OnChanges } from "@angular/core";
import { IncomeService } from "../services/income.service";
import { ExpenseService } from "../services/expense.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit, OnChanges {
  public totalIncome: number = 0;
  public totalExpense: number = 0;
  public percentage: number = 0;

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.incomeService.totalUpdate.subscribe((data: number) => {
      this.totalIncome = data;
    });

    this.expenseService.expenseUpdates.subscribe((data: number) => {
      this.totalExpense = data;
      this.percentage = Math.round(
        this.totalIncome > 0 ? (this.totalExpense / this.totalIncome) * 100 : 0
      );
    });
  }

  ngOnChanges() {}
}

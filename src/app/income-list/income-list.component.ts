import { Component, OnInit } from "@angular/core";
import { IncomeService } from "../services/income.service";
import { Income } from "../app.model";

@Component({
  selector: "app-income-list",
  templateUrl: "./income-list.component.html",
  styleUrls: ["./income-list.component.css"]
})
export class IncomeListComponent implements OnInit {
  public incomeList: Income[] = [];
  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {
    this.incomeList = this.incomeService.getList;
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { Income } from "src/app/app.model";
import { IncomeService } from "src/app/services/income.service";

@Component({
  selector: "app-income-list-item",
  templateUrl: "./income-list-item.component.html",
  styleUrls: ["./income-list-item.component.css"]
})
export class IncomeListItemComponent implements OnInit {
  @Input("item") currentItem: Income;

  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {}

  removeIncome(id: number) {
    this.incomeService.removeIncome(id);
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ExpenseFormComponent } from "./expense-form/expense-form.component";
import { IncomeListComponent } from "./income-list/income-list.component";
import { ExpenseListComponent } from "./expense-list/expense-list.component";
import { IncomeListItemComponent } from "./income-list/income-list-item/income-list-item.component";
import { ExpenseListItemComponent } from "./expense-list/expense-list-item/expense-list-item.component";
import { IncomeService } from "./services/income.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExpenseFormComponent,
    IncomeListComponent,
    ExpenseListComponent,
    IncomeListItemComponent,
    ExpenseListItemComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [IncomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeChartComponent } from './charts/income-chart/income-chart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'income', component: IncomeChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeChartComponent } from './charts/income-chart/income-chart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

// TODO: Add guards to protected routes
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'income', component: IncomeChartComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

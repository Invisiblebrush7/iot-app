import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeChartComponent } from './charts/income-chart/income-chart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { LogOutSuccesfullComponent } from './pages/log-out-succesfull/log-out-succesfull.component';
import { SpeedComponent } from './charts/speed/speed.component';
import { AccelerationComponent } from './charts/acceleration/acceleration.component';
import { FrecuencyComponent } from './charts/frecuency/frecuency.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedUsers = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'fuerza',
    component: IncomeChartComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'velocidad',
    component: SpeedComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'aceleracion',
    component: AccelerationComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'frecuencia',
    component: FrecuencyComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLoggedUsers,
    },
  },

  {
    path: 'logout',
    component: LogOutSuccesfullComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

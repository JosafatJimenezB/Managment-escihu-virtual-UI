import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/helpers/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'licenciaturas',
    loadChildren: () => import('./licenciatura/licenciatura.module').then(m => m.LicenciaturaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ciclos-escolares',
    loadChildren: () => import('./cycles/cycles.module').then(m => m.CyclesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'salones',
    loadChildren: () => import('./classrooms/classrooms.module').then(m => m.ClassroomsModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

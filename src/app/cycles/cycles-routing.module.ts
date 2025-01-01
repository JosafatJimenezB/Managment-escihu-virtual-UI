import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CyclesPageComponent } from './pages/all/all.component';
import { CycleByIdPageComponent } from './pages/cycle-by-id/cycle-by-id.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CyclesPageComponent,
      },
      {
        path: ':id',
        component: CycleByIdPageComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyclesRoutingModule { }

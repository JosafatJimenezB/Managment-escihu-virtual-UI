import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenciaturasComponentPage } from './pages/all/all.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LicenciaturasComponentPage,
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LicenciaturaRoutingModule { }

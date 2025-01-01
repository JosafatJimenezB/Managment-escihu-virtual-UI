import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherMainPageComponent } from './pages/all/all.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TeacherMainPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

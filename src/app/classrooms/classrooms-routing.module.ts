import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomMainPageComponent } from './pages/all/all.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: ClassroomMainPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomsRoutingModule { }

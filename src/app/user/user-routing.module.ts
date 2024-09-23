import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMainPageComponent } from './pages/all/all.component';
import { UserByIdPageComponent } from './pages/user-by-id/user-by-id.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserMainPageComponent
      },
      {
        path: 'user/:userId/type/:userType',
        component: UserByIdPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

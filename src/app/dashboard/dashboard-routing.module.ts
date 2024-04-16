import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPageComponent } from "./pages/dashboard.component";
import { ListUsersPageComponent } from "./pages/list-users/list-users.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardPageComponent,
      },
      {
        path: 'users',
        component: ListUsersPageComponent
      },
      {
        path: '**',
        redirectTo: ''
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

export class DashboardRoutingModule { }

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { UserDetailsList, UserList } from "../../interfaces/user.class";
import { DashboardService } from "../../services/dashboard.service";
import { User } from "src/app/auth/Interfaces/model";
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'dashboard-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUsersPageComponent implements OnInit, OnDestroy{

  readonly columns = ['id', 'username', 'email', 'user asigned', 'role'];

  items = [
    {
      caption: 'Dashboard',
      routerLink: 'dashboard',
      RouterLinkActive: RouterLinkActive
    },
    {
      caption: 'Usuarios',
      routerLink: '/dashboard/users',
      RouterLinkActive: RouterLinkActive
    }
  ]

  dataResponse: UserList = new UserList();

  users: UserDetailsList[] = [];

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly cdRed: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  ngOnDestroy(): void {
    this.dataResponse = new UserList();
    console.log('destroyed')
  }

  getUsers(): void {
    this.dashboardService.getUsers(10).subscribe(
      (response: UserList) => {
        console.log(response)
        this.dataResponse = response;
        this.users = response.users;
        this.cdRed.detectChanges();
        console.log(this.users)
      },
      (error) => {
        console.log('Error: ', error);
      }
    )
  }

}

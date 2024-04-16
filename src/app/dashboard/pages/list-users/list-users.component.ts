import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
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

  users: UserDetailsList[] = [];

  total: number = 0;

  dataResponse: UserList = new UserList();

  constructor(
    private readonly dashboardService: DashboardService,
  ) {
    this.getUsers();

  }

  ngOnInit(): void {
    this.getUsers();
    if(this.users.length === 0) {
      this.getUsers();
    }
  }

  ngOnDestroy(): void {
    this.users = [];
    this.dataResponse = new UserList();
    console.log('destroyed')
  }

  async getUsers(): Promise<void> {
    this.dashboardService.getUsers(10).subscribe(
      (data: UserList) => {
        console.log(data)
        this.users = data.users;
        this.dataResponse = data;
        this.total = data.totalPages;
        console.log('usuarios segun asignados', this.users)
        console.log('objecto de respuesta', this.dataResponse)

      },
      (error: any) => {
        console.error('Error fetching users', error);
      }
    );
  }

}

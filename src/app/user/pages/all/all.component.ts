import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Role, User, UserPaged } from '../../classes/user.class';

@Component({
  selector: 'user-main-page',
  templateUrl: 'all.component.html'
})

export class UserMainPageComponent implements OnInit, OnDestroy {

  readonly columns = ['id', 'username', 'email', 'role', 'userAsigned', 'update', 'delete']

  currentPage: number = 0;
  pageSize: number = 10;

  userResponse: UserPaged = new UserPaged();

  userRole: Role = new Role();

  private userService = inject(UserService);

  items = [
    {
      caption: 'Dashboard',
      routerLink: 'dashboard',
      RouterLinkActive: RouterLinkActive
    },
    {
      caption: 'Usuarios',
      routerLink: 'usuarios',
      RouterLinkActive: RouterLinkActive
    }
  ]

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.userResponse = new UserPaged();
    console.log('users destroyed')
  }

  getUsers(): void {
    this.userService.getAll(this.currentPage, this.pageSize)
      .subscribe(
        data => {
          console.log(data)
          this.userResponse = data;
        },
        error => {
        }
      )
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getUsers();
  }

  onSizeChange(size: number): void {
    this.pageSize = size;
    this.getUsers();
  }
}

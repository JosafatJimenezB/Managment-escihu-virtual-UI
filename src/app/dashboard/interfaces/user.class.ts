export class UserList {
  users: UserDetailsList[] = new Array<UserDetailsList>()
  currentPage: number = 0
  totalPages: number = 0
  pageSize: number = 0
  totalElements: number = 0
}

export class UserDetailsList {
  id: number = 0
  username: string = ''
  email: string = ''
  userAsigned: number = 0
  role: Role = new Role()
}

export class Role {
  roleId: number = 0
  authority: string = ''
}

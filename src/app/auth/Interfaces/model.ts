export class User {
  id: number = 0;
  username: string = '';
  token: string = '';
  userAssigned: number = 0;
  role: Role = new Role();

}

export class Role {
  roleId: number = 0;
  authority: string = '';
}


export class Credentials {
  username: string = '';
  password: string = '';
}

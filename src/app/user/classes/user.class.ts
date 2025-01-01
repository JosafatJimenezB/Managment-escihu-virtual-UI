export class UserPaged {
  content:          User[] = [];
  pageable:         Pageable = new Pageable();
  last:             boolean = false;
  totalElements:    number = 0;
  totalPages:       number = 0;
  first:            boolean = false;
  size:             number = 0;
  number:           number = 0;
  sort:             Sort = new Sort();
  numberOfElements: number = 0;
  empty:            boolean = false;
}

export class User {
  id:          number = 0;
  username:    string = '';
  email:       string = '';
  userAsigned: number = 0;
  role:        Role = new Role();
}

export class Role {
  roleId:    number = 0;
  authority: string = '';
}

export class Pageable {
  pageNumber: number = 0;
  pageSize:   number = 0;
  sort:       Sort = new Sort();
  offset:     number = 0;
  paged:      boolean = false;
  unpaged:    boolean = false;
}

export class Sort {
  empty:    boolean = false;
  sorted:   boolean = false;
  unsorted: boolean = false;
}

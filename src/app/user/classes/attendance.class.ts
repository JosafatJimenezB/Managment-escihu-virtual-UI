export class AttendancePaged {
  content:          Attendance[] = [];
  pageable:         Pageable = new Pageable();
  last:             boolean = false;
  totalPages:       number = 0;
  totalElements:    number = 0;
  first:            boolean = false;
  size:             number = 0;
  number:           number = 0;
  sort:             Sort = new Sort();
  numberOfElements: number = 0;
  empty:            boolean = false;
}

export class Attendance {
  id:            number = 0;
  typeAttendace: null | string = '';
  date:          Date = new Date();
  user:          User = new User();
}

export class CreateAttendance {
  userId: number = 0;
  typeAttendace: string = ''
}

export class User {
  userId:                number = 0;
  username:              string = '';
  email:                 string = '';
  userAsigned:           number = 0;
  authorities:           Authority[] = [];
  enabled:               boolean = false;
  credentialsNonExpired: boolean = false;
  accountNonExpired:     boolean = false;
  accountNonLocked:      boolean = false;
}

export interface Authority {
  roleId:    number;
  authority: string;
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
  unsorted: boolean = false;
  sorted:   boolean = false;
}

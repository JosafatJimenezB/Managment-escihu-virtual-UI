export class Cycle {
  id: number = 0;
  name: string = '';
  closedAt: string | null = '';
  createdAt: string = '';
  updatedAt: string = '';
}

export class CyclePagination {
  content: Cycle[] = []
  empty: boolean = false
  first: boolean = false
  last: boolean = false
  number: number = 0
  numberOfElements: number = 0
  pageable: Pageable = new Pageable()
  currentPage: number = 0
  totalPages: number = 0
  pageSize: number = 0
  totalElements: number = 0
  size: number = 0;
  sort: Sort = new Sort()
}

export class Pageable {
  offset: number = 0;
  pageNumber: number = 0;
  pageSize: number = 0;
  paged: boolean = false;
  unpaged: boolean = false;
  sort: Sort = new Sort();
}

export class Sort {
  empty: boolean = false;
  sorted: boolean = false;
  unsorted: boolean = false;
}

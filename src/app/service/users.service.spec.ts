import { TestBed } from '@angular/core/testing';

import { Usersservice } from './users.service';

describe('Usersservice', () => {
  let service: Usersservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usersservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

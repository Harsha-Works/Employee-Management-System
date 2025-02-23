import { TestBed } from '@angular/core/testing';

import { LeaveservicesService } from './leaveservices.service';

describe('LeaveservicesService', () => {
  let service: LeaveservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

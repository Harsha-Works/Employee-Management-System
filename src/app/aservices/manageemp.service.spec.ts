import { TestBed } from '@angular/core/testing';

import { ManageempService } from './manageemp.service';

describe('ManageempService', () => {
  let service: ManageempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

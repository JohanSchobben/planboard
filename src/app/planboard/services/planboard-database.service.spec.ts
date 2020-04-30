import { TestBed } from '@angular/core/testing';

import { PlanboardDatabaseService } from './planboard-database.service';

describe('PlanboardDatabaseService', () => {
  let service: PlanboardDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanboardDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

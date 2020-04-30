import { TestBed } from '@angular/core/testing';

import { PlanboardService } from './planboard.service';

describe('PlanboardService', () => {
  let service: PlanboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

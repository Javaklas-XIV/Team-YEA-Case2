import { TestBed } from '@angular/core/testing';

import { IngevuldevragenlijstService } from './ingevuldevragenlijst.service';

describe('IngevuldevragenlijstService', () => {
  let service: IngevuldevragenlijstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngevuldevragenlijstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

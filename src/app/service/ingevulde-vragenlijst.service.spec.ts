import { TestBed } from '@angular/core/testing';

import { IngevuldeVragenlijstService } from './ingevulde-vragenlijst.service';

describe('IngevuldeVragenlijstService', () => {
  let service: IngevuldeVragenlijstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngevuldeVragenlijstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BeeFactoryService } from './bee-factory.service';

describe('BeeFactoryService', () => {
  let service: BeeFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeeFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

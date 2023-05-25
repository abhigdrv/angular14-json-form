import { TestBed } from '@angular/core/testing';

import { Angular14JsonFormService } from './angular14-json-form.service';

describe('Angular14JsonFormService', () => {
  let service: Angular14JsonFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angular14JsonFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

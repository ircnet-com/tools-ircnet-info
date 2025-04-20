import { TestBed } from '@angular/core/testing';

import { RemoveColorsService } from './remove-colors.service';

describe('RemoveColorsService', () => {
  let service: RemoveColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

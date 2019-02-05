import { TestBed } from '@angular/core/testing';

import { NglFormBuilderService } from './form-builder.service';

describe('NglFormBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NglFormBuilderService = TestBed.get(NglFormBuilderService);
    expect(service).toBeTruthy();
  });
});

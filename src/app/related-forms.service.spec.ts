import { TestBed, inject } from '@angular/core/testing';

import { RelatedFormsService } from './related-forms.service';

describe('RelatedFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelatedFormsService]
    });
  });

  it('should be created', inject([RelatedFormsService], (service: RelatedFormsService) => {
    expect(service).toBeTruthy();
  }));
});

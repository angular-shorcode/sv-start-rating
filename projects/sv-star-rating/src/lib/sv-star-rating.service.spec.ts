import { TestBed } from '@angular/core/testing';

import { SvStarRatingService } from './sv-star-rating.service';

describe('SvStarRatingService', () => {
  let service: SvStarRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvStarRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

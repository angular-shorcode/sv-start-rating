import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvStarRatingComponent } from './sv-star-rating.component';

describe('SvStarRatingComponent', () => {
  let component: SvStarRatingComponent;
  let fixture: ComponentFixture<SvStarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvStarRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodCardCarouselComponent } from './apod-card-carousel.component';

describe('ApodCardCarouselComponent', () => {
  let component: ApodCardCarouselComponent;
  let fixture: ComponentFixture<ApodCardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodCardCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

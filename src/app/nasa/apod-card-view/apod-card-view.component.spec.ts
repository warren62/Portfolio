import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodCardViewComponent } from './apod-card-view.component';

describe('ApodCardViewComponent', () => {
  let component: ApodCardViewComponent;
  let fixture: ComponentFixture<ApodCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

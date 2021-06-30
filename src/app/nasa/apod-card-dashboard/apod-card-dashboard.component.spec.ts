import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodCardDashboardComponent } from './apod-card-dashboard.component';

describe('ApodCardDashboardComponent', () => {
  let component: ApodCardDashboardComponent;
  let fixture: ComponentFixture<ApodCardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodCardDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

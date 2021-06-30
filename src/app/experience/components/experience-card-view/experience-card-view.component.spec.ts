import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCardViewComponent } from './experience-card-view.component';

describe('ExperienceCardViewComponent', () => {
  let component: ExperienceCardViewComponent;
  let fixture: ComponentFixture<ExperienceCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

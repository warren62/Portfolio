import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCardDashboardComponent } from './skills-card-dashboard.component';

describe('SkillsCardDashboardComponent', () => {
  let component: SkillsCardDashboardComponent;
  let fixture: ComponentFixture<SkillsCardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCardDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

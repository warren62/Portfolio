import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCardViewComponent } from './skills-card-view.component';

describe('SkillsCardViewComponent', () => {
  let component: SkillsCardViewComponent;
  let fixture: ComponentFixture<SkillsCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

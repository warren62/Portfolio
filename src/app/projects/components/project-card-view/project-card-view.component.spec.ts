import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardViewComponent } from './project-card-view.component';

describe('ProjectCardViewComponent', () => {
  let component: ProjectCardViewComponent;
  let fixture: ComponentFixture<ProjectCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

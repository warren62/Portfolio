import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardCarouselComponent } from './project-card-carousel.component';

describe('ProjectCardCarouselComponent', () => {
  let component: ProjectCardCarouselComponent;
  let fixture: ComponentFixture<ProjectCardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

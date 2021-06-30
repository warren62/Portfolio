import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectCardCarouselComponent } from './components/project-card-carousel/project-card-carousel.component';
import { LayoutModule } from '@app/layout/layout.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardCarouselComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    LayoutModule
  ]
})
export class ProjectsModule { }

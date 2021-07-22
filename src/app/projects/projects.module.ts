import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectCardCarouselComponent } from './components/project-card-carousel/project-card-carousel.component';
import { LayoutModule } from '@app/layout/layout.module';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectCardViewComponent } from './components/project-card-view/project-card-view.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardCarouselComponent,
    ProjectCardComponent,
    ProjectCardViewComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    LayoutModule
  ]
})
export class ProjectsModule { }

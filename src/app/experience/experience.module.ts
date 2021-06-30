import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { ExperienceCardViewComponent } from './components/experience-card-view/experience-card-view.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { LayoutModule } from '@app/layout/layout.module';


@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceCardComponent,
    ExperienceCardViewComponent,
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    LayoutModule
  ]
})
export class ExperienceModule { }

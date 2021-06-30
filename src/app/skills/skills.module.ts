import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { SkillsCardDashboardComponent } from './components/skills-card-dashboard/skills-card-dashboard.component';
import { SkillsCardViewComponent } from './components/skills-card-view/skills-card-view.component';
import { LayoutModule } from '@app/layout/layout.module';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillsCardComponent,
    SkillsCardDashboardComponent,
    SkillsCardViewComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    LayoutModule
  ]
})
export class SkillsModule { }

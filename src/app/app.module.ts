// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NasaModule } from './nasa/nasa.module';
import { CoreModule } from './core/core.module';
import { ContactComponent } from './views/contact/contact.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ExperienceCardComponent } from './views/experience/components/experience-card/experience-card.component';
import { ExperienceCardViewComponent } from './views/experience/components/experience-card-view/experience-card-view.component';
import { ProjectCardCarouselComponent } from './views/projects/components/project-card-carousel/project-card-carousel.component';
import { SkillsCardDashboardComponent } from './views/skills/components/skills-card-dashboard/skills-card-dashboard.component';
import { SkillsCardComponent } from './views/skills/components/skills-card/skills-card.component';
import { SkillsCardViewComponent } from './views/skills/components/skills-card-view/skills-card-view.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ExperienceCardComponent,
    ExperienceCardViewComponent,
    ProjectCardCarouselComponent,
    SkillsCardDashboardComponent,
    SkillsCardComponent,
    SkillsCardViewComponent
  ],
  imports: [
    NasaModule,
    LayoutModule,
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'App DevTools',
      maxAge: 25,
      logOnly: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { SkillsComponent } from './views/skills/skills.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animationState: 'Home' } },
  { path: 'about', component: AboutComponent, data: { animationState: 'About' } },
  { path: 'skills', component: SkillsComponent, data: { animationState: 'Skills' } },
  { path: 'experience', component: ExperienceComponent, data: { animationState: 'Experience' } },
  { path: 'projects', component: ProjectsComponent, data: { animationState: 'Projects' } },
  { path: 'contact', component: ContactComponent, data: { animationState: 'Contact' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

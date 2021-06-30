import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: { animationState: 'Home' } },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule), data: { animationState: 'About' } },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule), data: { animationState: 'Contact' } },
  { path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule), data: { animationState: 'Experience' } },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule), data: { animationState: 'Projects' } },
  { path: 'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule), data: { animationState: 'Skills' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

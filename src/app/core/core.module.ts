import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from '../app-routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmailModule } from './email/email.module';
import { FullscreenDirective } from './directives/fullscreen.directive';

@NgModule({
  declarations: [
    SafePipe,
    FullscreenDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LayoutModule
  ],
  exports: [
    EmailModule,
    RouterOutlet,
    RouterLink,
    SafePipe,
    FullscreenDirective
  ],
  providers:[DatePipe, SafePipe]
})
export class CoreModule { }

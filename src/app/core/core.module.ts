import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from '../app-routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmailModule } from './email/email.module';

@NgModule({
  declarations: [
    SafePipe
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
    SafePipe
  ],
  providers:[DatePipe, SafePipe]
})
export class CoreModule { }

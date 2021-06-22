import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from '../app-routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';

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
    RouterOutlet,
    RouterLink,
    SafePipe
  ]
})
export class CoreModule { }

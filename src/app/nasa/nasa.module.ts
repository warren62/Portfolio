import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodComponent } from './apod/apod.component';
import { NasaService } from './nasa.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers:[
    NasaService
  ],
  declarations: [
    ApodComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    ApodComponent
  ]
})
export class NasaModule { }

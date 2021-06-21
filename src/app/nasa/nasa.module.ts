import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodComponent } from './apod/apod.component';
import { NasaDataService } from '../core/data-services/nasa-data.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { LayoutModule } from '../layout/layout.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  providers:[
    NasaDataService
  ],
  declarations: [
    ApodComponent
  ],
  imports: [
    HttpClientModule,
    CoreModule,
    CommonModule,
    LayoutModule,
    StoreModule.forFeature('nasa', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [
    ApodComponent
  ]
})
export class NasaModule { }

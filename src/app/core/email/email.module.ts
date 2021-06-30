import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('email', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class EmailModule { }

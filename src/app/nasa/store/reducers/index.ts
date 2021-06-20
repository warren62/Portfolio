import * as fromNasa from './nasa.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface NasaState {
  nasa: fromNasa.NasaState;
}

export const reducers: ActionReducerMap<NasaState> = {
  nasa: fromNasa.NasaReducer
};

export const getNasaState = createFeatureSelector<NasaState>('nasa');

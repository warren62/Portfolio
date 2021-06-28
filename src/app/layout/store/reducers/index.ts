import * as fromLayout from './layout.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface LayoutState {
  layout: fromLayout.LayoutState;
}

export const reducers: ActionReducerMap<LayoutState> = {
  layout: fromLayout.LayoutReducer
};

export const getLayoutState = createFeatureSelector<LayoutState>('layout');

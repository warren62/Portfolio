import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromNasa from '../reducers/nasa.reducer';

export const getCompleteNasaState = createSelector(
  fromFeature.getNasaState,
  (state: fromFeature.NasaState) => state.nasa
);

export const getRandomApod = createSelector(
  getCompleteNasaState,
  fromNasa.getApodImage
);

export const getApods = createSelector(
  getCompleteNasaState,
  fromNasa.getApods
);

export const getLoading = createSelector(
  getCompleteNasaState,
  fromNasa.getApodImageLoading
);

export const getLoaded = createSelector(
  getCompleteNasaState,
  fromNasa.getApodImageLoaded
);

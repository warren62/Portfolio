import { Action, createReducer, on } from '@ngrx/store';
import { ApodImageResponse } from '../../models/apod-image-response';
import * as nasaActions from '../actions/nasa.actions'


export type NasaState = {
  apodImage: ApodImageResponse | null;
  apods: ApodImageResponse[];
  loading: boolean;
  loaded: boolean;
};

export const initialState: NasaState = {
  apodImage: null,
  apods: [],
  loading: false,
  loaded: false
};

const reducer = createReducer<NasaState>(
  initialState,

  on(nasaActions.getNewApod, nasaActions.appendApods, nasaActions.getApods, (state, { }) => {
    return {
      ...state,
      loading: true
    };
  }),

  on(nasaActions.getNewApodSuccess, (state, { payload }) => {
    return {
      ...state,
      apodImage: payload,
      loaded: true,
      loading: false
    };
  }),

  on(nasaActions.getApodsSuccess, (state, { payload }) => {
    return {
      ...state,
      apods: payload,
      loaded: true,
      loading: false
    };
  }),

  on(nasaActions.appendApodsSuccess, (state, payload) => {
    return {
      ...state,
      apods: state.apods.concat(payload.payload),
      loaded: true,
      loading: false
    };
  })

);

export function NasaReducer(state: NasaState | undefined, action: Action) {
  return reducer(state, action);
}


export const getApodImage = (state: NasaState) => state.apodImage;
export const getApods = (state: NasaState) => state.apods;
export const getApodImageLoaded = (state: NasaState) => state.loaded;
export const getApodImageLoading = (state: NasaState) => state.loading;

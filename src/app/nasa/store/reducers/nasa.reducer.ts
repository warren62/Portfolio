import { Action, createReducer, on} from '@ngrx/store';
import { ApodImageResponse } from '../../models/apod-image-response';
import * as nasaActions from '../actions/nasa.actions'


export type NasaState = {
  apodImage: ApodImageResponse | null;
};

export const initialState: NasaState = {
  apodImage: null
};

const reducer = createReducer<NasaState>(
  initialState,
  on(nasaActions.getNewAPODSuccess, (state, { payload }) => {
      return {
          ...state,
          apodImage: payload
      };
  }),

);

export function NasaReducer(state: NasaState | undefined, action: Action) {
  return reducer(state, action);
}


export const getApodImage = (state: NasaState) => state.apodImage;

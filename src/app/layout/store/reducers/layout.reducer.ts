import { Action, createReducer, on} from '@ngrx/store';
import * as layoutActions from '../actions/layout.actions'


export type LayoutState = {
  isFullScreen: boolean
};

export const initialState: LayoutState = {
  isFullScreen: false
};

const reducer = createReducer<LayoutState>(
  initialState,

  on(layoutActions.toggleFullScreen, (state, {}) => {
    return {
      ...state,
      isFullScreen: !state.isFullScreen
    };
  })

);

export function LayoutReducer(state: LayoutState | undefined, action: Action) {
  return reducer(state, action);
}

export const getIsFullScreen = (state: LayoutState) => state.isFullScreen;

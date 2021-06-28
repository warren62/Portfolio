import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromLayout from '../reducers/layout.reducer';

export const getCompleteLayoutState = createSelector(
  fromFeature.getLayoutState,
  (state: fromFeature.LayoutState) => state.layout
);

export const getIsFullScreen = createSelector(
  getCompleteLayoutState,
  fromLayout.getIsFullScreen
);

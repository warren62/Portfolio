import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromEmail from '../reducers/email.reducer';

export const getCompleteEmailState = createSelector(
  fromFeature.getEmailState,
  (state: fromFeature.EmailState) => state.email
);

export const getEmailSending = createSelector(
  getCompleteEmailState,
  fromEmail.getEmailSending
);

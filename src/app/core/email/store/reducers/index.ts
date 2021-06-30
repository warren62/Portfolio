import * as fromEmail from './email.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface EmailState {
  email: fromEmail.EmailState;
}

export const reducers: ActionReducerMap<EmailState> = {
  email: fromEmail.EmailReducer
};

export const getEmailState = createFeatureSelector<EmailState>('email');

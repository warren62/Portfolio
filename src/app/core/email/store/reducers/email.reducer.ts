import { Action, createReducer, on} from '@ngrx/store';
import * as emailActions from '../actions/email.actions'


export type EmailState = {
  sending: boolean;
};

export const initialState: EmailState = {
  sending: false
};

const reducer = createReducer<EmailState>(
  initialState,

  on(emailActions.sendEmail, (state, {}) => {
    return {
      ...state,
      sending: true
    };
  }),

  on(emailActions.sendEmailFail, emailActions.sendEmailSuccess, (state) => {
      return {
          ...state,
          sending: false
      };
  }),

);

export function EmailReducer(state: EmailState | undefined, action: Action) {
  return reducer(state, action);
}

export const getEmailSending = (state: EmailState) => state.sending;


import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromActions from './actions';
import * as fromReducers from './reducers';
import * as fromSelectors from './selectors';

@Injectable({ providedIn: 'root' })
export class EmailStoreFacade {
  sending$ = this.store.pipe(select(fromSelectors.getEmailSending));

  constructor(private store: Store<fromReducers.EmailState>) {}

  sendEmail(from: string, to: string, subject: string, html: string) {
    this.store.dispatch(fromActions.sendEmail({
      from: from,
      to: to,
      subject: subject,
      html: html
    }));
  }
}

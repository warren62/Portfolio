
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApodRequest } from '../models/apod-request';
import * as fromActions from './actions';
import * as fromReducers from './reducers';
import * as fromSelectors from './selectors';

@Injectable({ providedIn: 'root' })
export class NasaStoreFacade {
  loading$ = this.store.pipe(select(fromSelectors.getLoading));
  randomApod$ = this.store.pipe(select(fromSelectors.getRandomApod));
  apods$ = this.store.pipe(select(fromSelectors.getApods));

  constructor(private store: Store<fromReducers.NasaState>) {}

  getNewApod() {
    this.store.dispatch(fromActions.getNewApod());
  }

  getApods(apodRequest: ApodRequest) {
    this.store.dispatch(fromActions.getApods(apodRequest));
  }

  appendApods(apodRequest: ApodRequest) {
    this.store.dispatch(fromActions.appendApods(apodRequest));
  }
}

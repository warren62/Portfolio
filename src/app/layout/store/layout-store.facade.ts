
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromActions from './actions';
import * as fromReducers from './reducers';
import * as fromSelectors from './selectors';

@Injectable({ providedIn: 'root' })
export class LayoutStoreFacade {
  isFullScreen$ = this.store.pipe(select(fromSelectors.getIsFullScreen));

  constructor(private store: Store<fromReducers.LayoutState>) {}

  toggleFullScreen() {
    this.store.dispatch(fromActions.toggleFullScreen());
  }

}

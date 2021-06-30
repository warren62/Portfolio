import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as nasaActions from '../actions/nasa.actions';
import { NasaDataService } from '../../../core/data-services/nasa-data.service';

@Injectable()
export class NasaEffects {

  constructor(
    private actions$: Actions,
    private appService: NasaDataService
  ) { }

  getNewApod$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nasaActions.getNewApod),
      switchMap(() =>
        this.appService.getApodImageResponse(1).pipe(
          map(response => nasaActions.getNewApodSuccess(response[0])),
          catchError((error: any) => of(nasaActions.getNewApodFail(error))))
      )
    )
  );

  getApods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nasaActions.getApods),
      switchMap(({ payload }) =>
        this.appService.getApods(payload).pipe(
          map(response => nasaActions.getApodsSuccess(response)),
          catchError((error: any) => of(nasaActions.getApodsFail(error))))
      )
    )
  );

  appendApods$ = createEffect(() =>
  this.actions$.pipe(
    ofType(nasaActions.appendApods),
    switchMap(({ payload }) =>
      this.appService.getApods(payload).pipe(
        map(response => nasaActions.appendApodsSuccess(response)),
        catchError((error: any) => of(nasaActions.appendApodsFail(error))))
    )
  )
);


}

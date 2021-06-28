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
      ofType(nasaActions.getNewAPOD),
      switchMap(() =>
        this.appService.getAPODImageResponse(1).pipe(
          map(response => nasaActions.getNewAPODSuccess(response[0])),
          catchError((error: any) => of(nasaActions.getNewAPODFail(error))))
      )
    )
  );

  getApods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nasaActions.getAPODs),
      switchMap(({ payload }) =>
        this.appService.getAPODs(payload).pipe(
          map(response => nasaActions.getAPODsSuccess(response)),
          catchError((error: any) => of(nasaActions.getAPODsFail(error))))
      )
    )
  );


}

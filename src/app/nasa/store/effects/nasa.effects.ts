import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as nasaActions from '../actions/nasa.actions';
import { NasaDataService } from '../../nasa-data.service';

@Injectable()
export class NasaEffects {

  constructor(
    private actions$: Actions,
    private appService: NasaDataService
  ) {}

  nasaLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nasaActions.getNewAPOD),
      switchMap(() =>
        this.appService.getAPODImageResponse(1).pipe(
          map(response => nasaActions.getNewAPODSuccess(response[0])),
          catchError((error: any) => of(nasaActions.getNewAPODFail(error))))
      )
    )
  );
}

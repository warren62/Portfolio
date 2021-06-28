import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as emailActions from '../actions/email.actions';
import { EmailDataService } from '../../../../core/data-services/email-data.service';

@Injectable()
export class EmailEffects {

  constructor(
    private actions$: Actions,
    private emailService: EmailDataService
  ) { }

  sendEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(emailActions.sendEmail),
      switchMap(({ payload }) =>
        this.emailService.sendContactEmail(payload).pipe(
          map(() => emailActions.sendEmailSuccess()),
          catchError(error => of(emailActions.sendEmailFail(error)))
        )
      )
    )
  );

  sendEmailFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(emailActions.sendEmailFail),
        tap(({ payload }) =>
        console.log(payload)
        // TODO: add notification service
        )
      ),
    { dispatch: false }
  );

  sendEmailSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(emailActions.sendEmailSuccess),
        tap(() =>
        console.log('Email sent successfully')
        // TODO: add notification service
        )
      ),
    { dispatch: false }
  );

}

import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as layoutActions from '../actions/layout.actions';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class LayoutEffects {

  constructor(
    private actions$: Actions,
    @Inject(DOCUMENT) private document: any
  ) { }

  toggleFullScreen$ = createEffect(() =>
    this.actions$.pipe(
      ofType(layoutActions.toggleFullScreen),
      tap(() =>
      // TODO: figure out how to call requestFullscreen in effects
        // this.openfullscreen()
        console.log('full screen effect')
      )
    ),
    { dispatch: false }
  );


  openfullscreen() {
    // Trigger fullscreen
    const docElmWithBrowsersFullScreenFunctions = this.document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };

    document.addEventListener('fullscreenerror', (event) => {
      console.error('an error occurred changing into fullscreen');
      console.log(event);
    });

    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
  }

  closefullscreen() {
    const docWithBrowsersExitFunctions = this.document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };
    if (docWithBrowsersExitFunctions.exitFullscreen) {
      docWithBrowsersExitFunctions.exitFullscreen();
    } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
      docWithBrowsersExitFunctions.mozCancelFullScreen();
    } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      docWithBrowsersExitFunctions.webkitExitFullscreen();
    } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
      docWithBrowsersExitFunctions.msExitFullscreen();
    }
  }

}

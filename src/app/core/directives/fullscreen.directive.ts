import { Directive, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: "[fullscreen]",
  exportAs: "fullscreen"
})
export class FullscreenDirective {

  private isFullscreenSubject = new BehaviorSubject(false);
  isFullscreen$ = this.isFullscreenSubject.asObservable();

  constructor(private el: ElementRef) { }

  toggle() {
    if (this.isFullscreenSubject.getValue()) this.closefullscreen();
    else this.openFullscreen();
  }

  openFullscreen() {
    // Use this.divRef.nativeElement here to request fullscreen
    const elem = this.el.nativeElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }

  closefullscreen() {
    // const docWithBrowsersExitFunctions = document as Document & {
    //   mozCancelFullScreen(): Promise<void>;
    //   webkitExitFullscreen(): Promise<void>;
    //   msExitFullscreen(): Promise<void>;
    // };
    const elem = this.el.nativeElement
    if (elem.exitFullscreen) {
      elem.exitFullscreen();
    } else if (elem.mozCancelFullScreen) { /* Firefox */
      elem.mozCancelFullScreen();
    } else if (elem.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitExitFullscreen();
    } else if (elem.msExitFullscreen) { /* IE/Edge */
      elem.msExitFullscreen();
    }

    // this.close.emit();
  }

}

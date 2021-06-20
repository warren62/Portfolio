import { animate, keyframes, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { ApodImageResponse } from '../models/apod-image-response';
import { NasaStoreFacade } from '../store/nasa-store.facade';

const fadeInOut = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: '0' }),
    animate('1s ease-out', style({ opacity: '1' })),
  ]),
  transition(':leave', [
    style({ opacity: '1' }),
    animate('1s ease-out', style({ opacity: '0' })),
  ]),
])

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
  animations: [fadeInOut]
})
export class ApodComponent implements OnInit {

  apodImage$ = new Observable<ApodImageResponse | null>();
  loading$: Observable<boolean> = new Observable();

  constructor(private facade: NasaStoreFacade) { }

  ngOnInit(): void {
    this.apodImage$ = this.facade.randomApod$
    this.loading$ = this.facade.loading$;

    this.facade.getNewApod();

    interval(10000).subscribe(() => {
      this.facade.getNewApod();
    });
  }
}

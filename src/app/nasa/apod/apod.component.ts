import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { ApodImageResponse } from '../models/apod-image-response';
import { NasaStoreFacade } from '../store/nasa-store.facade';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apodImage$ = new Observable<ApodImageResponse | null>();
  loading$: Observable<boolean> = new Observable<boolean>();

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

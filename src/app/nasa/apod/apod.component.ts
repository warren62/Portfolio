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

  constructor(private facade: NasaStoreFacade) { }

  ngOnInit(): void {
    this.facade.getNewApod();
    this.apodImage$ = this.facade.randomApod$

    interval(10000).subscribe(() => {
      this.facade.getNewApod();
    });
  }

}

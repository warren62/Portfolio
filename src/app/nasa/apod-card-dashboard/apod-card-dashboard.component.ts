import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Card } from 'src/app/layout/card/models/card.model';
import { ApodImageResponse } from '../models/apod-image-response';
import { NasaStoreFacade } from '../store/nasa-store.facade';

@Component({
  selector: 'app-apod-card-dashboard',
  templateUrl: './apod-card-dashboard.component.html',
  styleUrls: ['./apod-card-dashboard.component.scss']
})
export class ApodCardDashboardComponent implements OnInit {

  apodImages$ = new Observable<ApodImageResponse[]>();
  apodCards$ = new Observable<Card[] | null>();
  loading$: Observable<boolean> = new Observable<boolean>();

  constructor(private facade: NasaStoreFacade) {

    // map the apod responses to cards
    this.apodCards$ = this.facade.apods$.pipe(
      filter(values => !!values),
      map(values => {
        return values!.map(value => {
          return {
            title: value.title,
            subTitle: value.copyright,
            description: value.explanation,
            url: value.hdurl ?? value.url,
            shareUrl: value.hdurl ?? value.url,
            type: value.media_type,
          }
        })
      })
    )
    this.loading$ = this.facade.loading$;
  }

  ngOnInit(): void {

    const start = new Date()
    start.setDate(start.getDate() - 30)
    this.facade.getApods({
      start: start
    })
  }
}

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

  startDate: Date = new Date();

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
            thumbnailUrl: value.url,
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
    this.startDate = start
    this.facade.getApods({
      start: start
    })
  }

  getApods() {
    const ogStart = new Date(this.startDate);
    this.startDate.setDate(this.startDate.getDate() - 30)

    const end = new Date(ogStart);
    this.facade.appendApods({
      start: this.startDate,
      end: end
    })
  }
}

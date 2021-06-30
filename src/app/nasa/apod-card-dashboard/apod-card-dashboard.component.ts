import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Card } from 'src/app/layout/card/models/card.model';
import { ApodImageResponse } from '../models/apod-image-response';
import { NasaStoreFacade } from '../store/nasa-store.facade';

@UntilDestroy()
@Component({
  selector: 'app-apod-card-dashboard',
  templateUrl: './apod-card-dashboard.component.html',
  styleUrls: ['./apod-card-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApodCardDashboardComponent implements OnInit {

  apodImages$ = new Observable<ApodImageResponse[]>();
  apodCards$ = new Observable<Card[] | null>();
  loading$: Observable<boolean> = new Observable<boolean>();

  startDate: Date = new Date();
  loaded: boolean = false;

  constructor(private facade: NasaStoreFacade) {

    // map the apod responses to cards
    this.apodCards$ = this.facade.apods$.pipe(
      filter(values => !!values),
      map(values => {
        // TODO: get videos working
        return values!.filter(v => v.media_type !== 'video').map(value => {
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
    this.facade.loaded$.pipe(
      untilDestroyed(this)
    ).subscribe( value =>
      this.loaded = value
    );
  }

  ngOnInit(): void {

    if(!this.loaded) {
      const start = new Date()
      start.setDate(start.getDate() - 30)
      this.startDate = start
      this.facade.getApods({
        start: start
      })
    }
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

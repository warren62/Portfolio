import { Component, Input } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Card } from '../card/models/card.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent {

  @Input() cards: Card[] = []
  @Input() loading: boolean = false;

  cols: number = 3;

  colspan: number = 1
  rowspan: number = 2

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {

    // Set up rows/cols by screen size
    this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      untilDestroyed(this)
    ).subscribe(value => {
      if (value.matches) {

        this.cols = 1

        this.colspan = 1
        this.rowspan = 1
      } else{
        this.cols = 3

        this.colspan = 1
        this.rowspan = 1
      }
    });
  }
}

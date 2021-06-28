import { Component, Input, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { fadeIn } from '../animations';
import { Card } from '../card/models/card.model';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss'],
  // providers: [
  //   { provide: CarouselConfig, useValue: { interval: 100, noPause: false, showIndicators: true } }
  // ],
  animations: [fadeIn]
})
export class CardCarouselComponent implements OnInit {

  @Input() slides: { image: string, text: string }[] = [];
  @Input() cards: Card[] = [];
  @Input() loading: boolean = false;

  noWrapSlides = false;
  showIndicator = true;

  constructor() { }

  ngOnInit(): void {
  }

}

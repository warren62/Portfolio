import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from '../animations';
import { Card } from './models/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [fadeIn]
})
export class CardComponent implements OnInit {

  @Input() cardModel: Card = new Card();
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

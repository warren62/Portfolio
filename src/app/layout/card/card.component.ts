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
// dummy data
  products = [
    { name: "Product A", description: "some description", picture: { uri: 'https://dummyimage.com/600x150/000/fff' } },
    { name: "Product B", description: "some description", picture: { uri: 'https://dummyimage.com/300x300/000/fff' } },
    { name: "Product C", description: "some description", picture: { uri: 'https://dummyimage.com/300x400/000/fff' } },
    { name: "Product D", description: "some description", picture: { uri: 'https://dummyimage.com/600x500/000/fff' } }]

  constructor() { }

  ngOnInit(): void {
  }

}

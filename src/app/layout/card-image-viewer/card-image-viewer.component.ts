import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card/models/card.model';

@Component({
  selector: 'app-card-image-viewer',
  templateUrl: './card-image-viewer.component.html',
  styleUrls: ['./card-image-viewer.component.scss']
})
export class CardImageViewerComponent implements OnInit {

  @Input() cardModel: Card = new Card();
  @Input() loading: boolean = false;

  viewerOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

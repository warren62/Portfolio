import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card/models/card.model';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() cardModels: Card[] = []
  constructor() { }

  ngOnInit(): void {
  }

}

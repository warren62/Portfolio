import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss']
})
export class ShareButtonComponent implements OnInit {

  @Input() url: string = '';
  shareButtonActive: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

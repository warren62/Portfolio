import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() size: number = 55;
  @Input() show: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}

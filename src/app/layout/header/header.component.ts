import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onMenuClick: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  menuClick(){
    this.onMenuClick.emit();
  }

}

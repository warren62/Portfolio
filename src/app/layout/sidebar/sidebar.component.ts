import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isOpen: boolean = false;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.close();
      } else {
        this.sidenav.mode = 'side';
        this.open();
      }
    });
  }

  close() {
    this.isOpen = false;
    this.sidenav.close();
  }

  open() {
    this.isOpen = true;
    this.sidenav.open();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

}

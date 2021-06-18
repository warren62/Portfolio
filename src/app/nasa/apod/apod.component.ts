import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApodImageResponse } from '../models/apod-image-response';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apodImages = new Observable<ApodImageResponse[]>();
  headers = [];
  testArray: ApodImageResponse[] = [];

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.apodImages = this.nasaService.getAPODImageResponse();
  }

}

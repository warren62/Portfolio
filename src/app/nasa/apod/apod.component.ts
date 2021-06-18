import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { ApodImageResponse } from '../models/apod-image-response';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apodImages$ = new Observable<ApodImageResponse[]>();
  apodImages: ApodImageResponse[] = [];
  intervalImageCount: number = 0;
  headers = [];
  testArray: ApodImageResponse[] = [];
  currentImage: ApodImageResponse | null = null;


  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.apodImages$ = this.nasaService.getAPODImageResponse()
    this.apodImages$.subscribe(images => {
      this.apodImages = images
      this.currentImage = this.apodImages[this.intervalImageCount]
    });

    interval(10000).subscribe(value => {
      this.intervalImageCount++
      if (this.intervalImageCount >= this.apodImages.length) {
        this.intervalImageCount = 0;
      }

      this.currentImage = this.apodImages[this.intervalImageCount]
    });
  }

}

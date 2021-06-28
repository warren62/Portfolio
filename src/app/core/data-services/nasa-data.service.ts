import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

// Rxjs
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, } from 'rxjs/operators';

import { ApodImageResponse } from '../../nasa/models/apod-image-response';
import { ApodRequest } from 'src/app/nasa/models/apod-request';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

// TODO: move this to a core module
export class NasaDataService {

  nasa_url = 'https://api.nasa.gov/planetary/apod?api_key=OUglulkWhUypTytmdHNOa5V383PWM1woloIg3Nn6'

  constructor(private http_client: HttpClient, public datepipe: DatePipe) { }

  getApodImage(apodRequest: ApodRequest): Observable<HttpResponse<ApodImageResponse[]>> {
    let url = this.nasa_url;

    // cant use both count and start
    if(apodRequest.count) {
      url += '&count=' + apodRequest.count;
    }
    if (apodRequest.start) {
      url += `&start_date=${this.datepipe.transform(apodRequest.start, 'yyyy-MM-dd')}`;
      url += apodRequest.end ? `&end_date=${this.datepipe.transform(apodRequest.end, 'yyyy-MM-dd')}` : ''
    }

    return this.http_client.get<ApodImageResponse[]>(url, { observe: 'response' });
  }

  getApodImageResponse(count: number = 1): Observable<ApodImageResponse[]> {
    return this.getApodImage({ count: count }).pipe(
      filter(response => response.body !== null),
      map(response => this.createApodImageResponse(response.body)),
      catchError(err => this.handleError(err))
    );
  }

  getApods(apodRequest: ApodRequest): Observable<ApodImageResponse[]> {
    return this.getApodImage({
      count: apodRequest.count,
      start: apodRequest.start,
      end: apodRequest.end
    }).pipe(
      filter(response => response.body !== null),
      map(response => this.createApodImageResponse(response.body)),
      catchError(err => this.handleError(err))
    );
  }

  handleError(error: HttpErrorResponse) {
    console.error('Apod image error: ', error);
    return throwError(error.message || 'Apod image data service error.');
  }

  createApodImageResponse(res: any): ApodImageResponse[] {
    return [...res]
  }
}

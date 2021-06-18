import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { interval, Observable, throwError } from 'rxjs';
import { catchError, filter, flatMap, map, mergeMap, take } from 'rxjs/operators';

import { ApodImageResponse } from './models/apod-image-response';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  nasa_url = 'https://api.nasa.gov/planetary/apod?api_key=OUglulkWhUypTytmdHNOa5V383PWM1woloIg3Nn6&count=10'

  constructor(private http_client: HttpClient) { }

  getAPODImage(): Observable<HttpResponse<ApodImageResponse[]>> {
    return this.http_client.get<ApodImageResponse[]>(this.nasa_url, { observe: 'response' });
  }

  getAPODImageResponse(): Observable<ApodImageResponse[]> {
    return this.getAPODImage().pipe(
      filter(response => response.body !== null),
      map(response => this.createAPODImageResponse(response.body)),
      catchError(err => this.handleError(err))
    );
  }

  // TODO: set up redux and dispatch fail action
  handleError(error: HttpErrorResponse) {
    console.error('APOD image error: ', error);
    return throwError(error.message || 'APOD image api error.');
  }

  createAPODImageResponse(res: any): ApodImageResponse[] {
    return [...res]
  }
}

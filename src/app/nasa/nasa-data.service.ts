import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

// Rxjs
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, } from 'rxjs/operators';

import { ApodImageResponse } from './models/apod-image-response';

@Injectable({
  providedIn: 'root'
})

// TODO: move this to a core module
export class NasaDataService {

  nasa_url = 'https://api.nasa.gov/planetary/apod?api_key=OUglulkWhUypTytmdHNOa5V383PWM1woloIg3Nn6'

  constructor(private http_client: HttpClient) { }

  getAPODImage(count: number): Observable<HttpResponse<ApodImageResponse[]>> {
    return this.http_client.get<ApodImageResponse[]>(this.nasa_url + '&count=' + count, { observe: 'response' });
  }

  getAPODImageResponse(count: number = 1): Observable<ApodImageResponse[]> {
    return this.getAPODImage(count).pipe(
      filter(response => response.body !== null),
      map(response => this.createAPODImageResponse(response.body)),
      catchError(err => this.handleError(err))
    );
  }

  handleError(error: HttpErrorResponse) {
    console.error('APOD image error: ', error);
    return throwError(error.message || 'APOD image data service error.');
  }

  createAPODImageResponse(res: any): ApodImageResponse[] {
    return [...res]
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, flatMap, map, mergeMap } from 'rxjs/operators';

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
      map(response => this.createAPODImageResponse(response.body))
      // mergeMap, index => {
      //   // const body = response.body ?? [];
      //   // return body.map(value => {
      //   //   return value;
      //   // }
      //   return array;
      // })
    );
  }

  createAPODImageResponse(res: any): ApodImageResponse[] {
    return [...res]
  }
}

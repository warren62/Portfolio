import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EmailRequest } from '../email/models/email-request';

@Injectable({
  providedIn: 'root'
})
export class EmailDataService {

  // TODO: move to environment file
  url: string = 'https://localhost:5001/api/email/sendEmail'

  constructor(private http: HttpClient) { }

  sendContactEmail(request: EmailRequest): Observable<any> {
    return this.sendEmail(request);
  }

  sendEmail(request: EmailRequest){
    const formData: FormData = new FormData();
    formData.append('To', request.to);
    formData.append('From', request.from);
    formData.append('Subject', request.subject);
    formData.append('Html', request.html);

    // TODO: may be able to pull this from a config service as well
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
      })
    };

    return this.http.post(this.url, formData, httpOptions)
    .pipe(
      map((response: any) => {
        console.log(response);
      }),
      catchError((error) => this.handleError(error))
    );
  }

  handleError(error: HttpErrorResponse) {
    console.error('Email data service error: ', error);
    return throwError(error.message || 'Email data service server error.');
  }

}

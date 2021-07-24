/* tslint:disable:one-line whitespace triple-equals */
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ServerList} from './server-list';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AppSettings} from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class ServerListService {
  private url = window.location.protocol + AppSettings.INFOBOT_API_URL + '/serversByCountry';

  constructor(private http: HttpClient) {
  }

  getServerList(): Observable<ServerList> {
    return this.http.get<ServerList>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error.errorMessage) {
      return throwError(error.error.errorMessage);
    }
    else {
      return throwError('Connection error. Please try again.');
    }
  }
}

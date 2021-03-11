import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IlineLookupResponse} from './iline-lookup-response';
import {IlineForm} from './iline-form';
import {AppSettings} from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class IlineLookupService {
  private url = window.location.protocol + AppSettings.INFOBOT_API_URL + '/i-line?q=';

  constructor(private httpClient: HttpClient) {
  }

  getServerList(ilineForm: IlineForm): Observable<IlineLookupResponse> {
    return this.httpClient.get<IlineLookupResponse>(this.url + ilineForm.address).pipe(
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

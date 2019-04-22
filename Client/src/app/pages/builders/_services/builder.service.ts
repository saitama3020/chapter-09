import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { Builder } from './../builder';
import { HttpHandleErrorService, HandleError } from './../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  private readonly apiUrl = environment.apiUrl;

  private buildersUrl = this.apiUrl + '/builders';

  private handleError: HandleError;

  constructor(private http:HttpClient, httpHandleError: HttpHandleErrorService) {
    this.handleError = httpHandleError.createHandleError('BuildersService');
   }

  getBuilders(): Observable<Builder[]>
  {
    return this.http.get<Builder[]>(this.buildersUrl).pipe(
      catchError(this.handleError('getBuilders',[]))
    );
  }

  getBuilderDetail (id: number): Observable<Builder[]> {
    return this.http.get<Builder[]>(this.buildersUrl + `/${id}`).pipe(
      catchError(this.handleError('getBuilderDetail', []))
    );
  }

  addBuilder(builder: Builder): Observable<Builder>
  {
    return this.http.post<Builder>(this.buildersUrl, builder).pipe(
      catchError(this.handleError('addBuilder', builder))
    );
  }

  updateBuilder(builder: Builder, id: number): Observable<Builder>
  {
    return this.http.put<Builder>(this.buildersUrl + `/${id}`, builder)
    .pipe(catchError(this.handleError('updateBuilder', builder)));
  }

  deleteBuilder(id: number): Observable<Builder[]>
  {
    return this.http.delete<Builder[]>(this.buildersUrl + `/${id}`).pipe(
      catchError(this.handleError('deleteBuilder'))
    );
  }
  
  // private handleError(error: HttpErrorResponse)
  // {
  //   if (error.error instanceof ErrorEvent) 
  //   {
  //     console.error('An error occured:', error.error.message);
  //   } else {
  //     return throwError(error);
  //   }
  //   return throwError('Something bad happened; please try again later.');
  // }
}

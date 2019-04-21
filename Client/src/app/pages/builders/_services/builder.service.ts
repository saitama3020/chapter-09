import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { Builder } from './../builder';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  private readonly apiUrl = environment.apiUrl;

  private buildersUrl = this.apiUrl + '/builders';

  constructor(private http:HttpClient) { }

  getBuilders(): Observable<Builder[]>
  {
    return this.http.get<Builder[]>(this.buildersUrl).pipe(
      catchError(error=>this.handleError(error))
    );
  }

  getBuilderDetail (id: number): Observable<Builder[]> {
    return this.http.get<Builder[]>(this.buildersUrl + `/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  addBuilder(builder: Builder): Observable<Builder>
  {
    return this.http.post<Builder>(this.buildersUrl, builder).pipe(
      catchError(error=>this.handleError(error))
    );
  }

  updateBuilder(builder: Builder, id: number): Observable<Builder>
  {
    return this.http.put<Builder>(this.buildersUrl + `/${id}`, builder)
    .pipe(catchError(error=>this.handleError(error)));
  }

  deleteBuilder(id: number): Observable<Builder[]>
  {
    return this.http.delete<Builder[]>(this.buildersUrl + `/${id}`).pipe(
      catchError(error=>this.handleError(error))
    );
  }
  
  private handleError(error: HttpErrorResponse)
  {
    if (error.error instanceof ErrorEvent) 
    {
      console.error('An error occured:', error.error.message);
    } else {
      return throwError(error);
    }
    return throwError('Something bad happened; please try again later.');
  }
}

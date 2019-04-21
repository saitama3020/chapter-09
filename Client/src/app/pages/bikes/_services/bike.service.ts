import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { Bike } from './../bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private readonly apiUrl = environment.apiUrl;
  private bikesUrl = this.apiUrl + '/bikes/';

  constructor(private http: HttpClient) { }

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikesUrl)
    .pipe(catchError(error=>
      this.handleError(error)
    ));
  }

  getBikeDetail (id: number): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikesUrl + `/${id}`)
    .pipe(catchError(error=>this.handleError(error)));
  }  

  addBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.bikesUrl, bike)
    .pipe(
      catchError(error=>this.handleError(error))
    );
  }

  updateBike (bike: Bike, id: number): Observable<Bike> {
    return this.http.put<Bike>(this.bikesUrl + `/${id}`, bike)
    .pipe(catchError(error=>this.handleError(error)));
  }

  deleteBike(id: number): Observable<Bike[]>
  {
    return this.http.delete<Bike[]>(this.bikesUrl + `/${id}`)
    .pipe(catchError(error=>this.handleError(error)));
  }

  voteOnBike(vote: any, bike: number): Observable<any>
  {
    const rating = vote;
    return this.http.post(this.bikesUrl + `/${bike}/ratings`, {rating})
    .pipe(catchError(error=>this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent)
    {
      console.error('An error occured:', error.error.message);

    } else {
      return throwError(error);
    }
    return throwError('Something bad happened; please try again later.');
  }
}

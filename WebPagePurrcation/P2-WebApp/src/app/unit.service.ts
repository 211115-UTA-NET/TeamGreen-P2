import { Injectable } from '@angular/core';
import { Unit } from './unit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private unitsUrl = 'https://purrcationapi.azurewebsites.net/units';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.unitsUrl);
  }

  //getUnit(id: number): Observable<Unit> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    //const unit = HEROES.find(h => h.id === id)!;
    
    //return of(unit);
  //}

  /** PUT: update the hero on the server */
  updateUnit(unit: Unit): Observable<any> {
    return this.http.put(this.unitsUrl, unit, this.httpOptions);
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  

}

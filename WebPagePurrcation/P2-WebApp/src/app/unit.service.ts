import { Injectable } from '@angular/core';
import { Unit } from './unit';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private unitsUrl = 'https://purrcationapi.azurewebsites.net/getallunits';
  private unitIdUrl = 'https://purrcationapi.azurewebsites.net/GetUnitById/';
  private ownerUnitsUrl = 'https://purrcationapi.azurewebsites.net/GetOwnerUnitById/';
  unnis: HttpResponse<Unit[]> | undefined;
  units: Unit[] | null | undefined;
  unit: Unit | undefined;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUnits(): Observable<HttpResponse<Unit[]>> {
    return this.http.get<Unit[]>(this.unitsUrl, {observe: 'response'});
  }

  getUnit(id: number): Observable<HttpResponse<Unit[]>> | undefined {
    return this.http.get<Unit[]>(this.unitIdUrl + "/" + id, {observe: 'response'});
  }

  /** PUT: update the hero on the server */
  submitUnit(address: string, city: string, state: string, zip: string, pictureUrl: string, description: string, price: number, maxGuests: number): void {
    this.http.post(this.unitsUrl, {Address: address, State: state, City: city, ZipCode: zip, PictureURL: pictureUrl, Description: description, Price: price, MaxGuests: maxGuests}, this.httpOptions);
  }

  getOwnerUnits(id: number): Observable<HttpResponse<Unit[]>> {
    return this.http.get<Unit[]>(this.ownerUnitsUrl + "/" + id, {observe: 'response'});
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

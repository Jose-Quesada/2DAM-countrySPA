import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1'
  constructor(private http:HttpClient) { }

  private getCountriesRequest ( url: string ): Observable<(Country[])> {
    return this.http.get<Country[]>( url )
      .pipe(
        catchError ( () => of([])),
      )
  }


  searchCountry ( term: string ): Observable<Country[]> {
    const url = `${this.apiURL}/name/${term}`
    return this.getCountriesRequest(url)
  }

  searchCapital ( term: string ): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${term}`
    return this.getCountriesRequest(url)
  }

  searchRegion ( region: string ): Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`
    return this.getCountriesRequest(url)
  }

  searchByAlphaCode (  code : string ): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`)
            .pipe(
              map (countries => countries.length > 0 ? countries[0]: null),
              catchError(error => of(null))
            )
  }

}

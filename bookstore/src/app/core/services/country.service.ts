import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class CountryService {

  private readonly url = 'https://restcountries.eu/rest/v2/name/';

  constructor(private http: Http) { }

  search(name: string): Observable<string[]> {
    name = name && name.trim();
    if (name) {
      return this.http.get(this.url + name)
        .map(response => response.json())
        .map(countries => countries.map(country =>
          country.translations.fr
        ))
        .catch(error => Observable.of([]));
    }
    return Observable.of([]);
  }

}

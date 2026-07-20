import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL = environment.RestCountriesUrl;
const API_KEY = environment.RestCountriesApiKey;

@Injectable({
  providedIn: 'root',
})

export class CountryService {
  private http = inject(HttpClient);

  // Normaliza la respuesta para devolver siempre un arreglo de RESTCountry
  searchByCapital(query: string): Observable<RESTCountry[]> {
    const lowerCaseQuery = query.toLowerCase();

    const headers = {
      Authorization: `Bearer ${API_KEY}`,
    };

    return this.http.get<any>(`${API_URL}/capitals?q=${lowerCaseQuery}`, { headers })
      .pipe(
        map(resp => {
          if (Array.isArray(resp)) return resp as RESTCountry[];
          if (resp && Array.isArray((resp as any).data)) return (resp as any).data as RESTCountry[];
          return [] as RESTCountry[];
        })
      );
  }
}


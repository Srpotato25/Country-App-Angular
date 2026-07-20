import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital-page.html'
})
export class ByCapitalPage {
  CountryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<RESTCountry[]>([]); /* inicializamos en un arreglo vacío */

  onSearch(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.CountryService.searchByCapital(query).subscribe(countries => {
      this.isLoading.set(false);
      this.countries.set(countries);
      console.log('by-capital-page.ts: received', countries);
    }, err => {
      this.isLoading.set(false);
      this.isError.set('Error fetching countries');
      console.error(err);
    });
  }
}


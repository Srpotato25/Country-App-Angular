import { Component, Input, Signal, signal } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html'
})
export class CountryList {
  @Input() countries: Signal<RESTCountry[]> = signal<RESTCountry[]>([]);
}

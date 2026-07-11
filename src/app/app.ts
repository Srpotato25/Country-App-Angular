import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryFooter } from "./country/components/country-footer/country-footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CountryFooter],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('country-app');
}

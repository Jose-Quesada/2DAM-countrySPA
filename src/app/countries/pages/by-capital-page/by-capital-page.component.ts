import { Component } from '@angular/core';
import { CountriesService } from '../../services/contries.service';
import { Country } from '../../interfaces/country.interface';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public placeHolder: string = "tengo el place holder"
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  public searchByCapital ( term: string):void{
    this.countriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries;
        console.log(countries);
      }
      )
  }
}

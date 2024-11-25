import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/contries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  country?:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap (({id})=> this.countriesService.searchByAlphaCode(id) )
    )
      .subscribe( country => {
        if (!country){
          return this.router.navigateByUrl('')
        }
        this.country = country
        return

      }
      )
  }



}

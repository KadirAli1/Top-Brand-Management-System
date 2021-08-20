import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryCode } from '../../interface/country-code.interface';
import { CountryCodeService } from '../../service/country-code.service';

@Component({
  selector: 'app-rating-list-page',
  templateUrl: './rating-list-page.component.html',
  styleUrls: ['./rating-list-page.component.scss'],
})
export class RatingListPageComponent {
  countryCodes$: Observable<CountryCode[]>;

  constructor(private countryCodeService: CountryCodeService) {
    this.countryCodes$ = this.countryCodeService.findAll();
  }

  onCountryCodeChange(id: number | null): void {
    console.log(id);
  }
}

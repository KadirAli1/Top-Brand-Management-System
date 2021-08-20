import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryCode } from '../interface/country-code.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryCodeService {
  private path = 'http://localhost:3000/country-codes';

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<CountryCode[]> {
    return this.httpClient.get<CountryCode[]>(this.path);
  }
}

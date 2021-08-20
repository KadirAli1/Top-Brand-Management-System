import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUpdateBrandRequest } from '../interface/create-update-brand-request.interface';
import { Brand } from '../interface/brand.interface';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private readonly path = 'http://localhost:3000/brands';

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(`${this.path}`);
  }

  findOne(id: number) {
    return this.httpClient.get<Brand>(`${this.path}/${id}`);
  }

  create(createRequest: CreateUpdateBrandRequest) {
    return this.httpClient.post<any>(`${this.path}`, createRequest);
  }

  update(id: number, updateBrandDto: CreateUpdateBrandRequest) {
    return this.httpClient.put<any>(`${this.path}/${id}`, updateBrandDto);
  }

  delete(id: number) {
    return this.httpClient.delete<any>(`${this.path}/${id}`);
  }
}

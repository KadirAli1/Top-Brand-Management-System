import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUpdateBrandRequest } from 'src/app/interface/create-update-brand-request.interface';
import { BrandsService } from 'src/app/service/brands.service';

@Component({
  selector: 'app-brands-create',
  templateUrl: './brands-create.component.html',
  styleUrls: ['./brands-create.component.scss'],
})
export class BrandsCreateComponent {
  form: FormGroup = this._formDefinition;

  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandsService,
    private router: Router
  ) {}

  onSubmit(): void {
    const request = this.form.value as CreateUpdateBrandRequest;
    this.brandsService
      .create(request)
      .subscribe(() => this.router.navigate(['brands']));
  }

  get _formDefinition(): FormGroup {
    return this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(64),
          Validators.pattern('[A-Za-z0-9]*'),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(256),
          Validators.pattern('[A-Za-z0-9-.]*'),
        ],
      ],
    });
  }
}

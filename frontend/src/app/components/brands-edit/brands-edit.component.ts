import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUpdateBrandRequest } from '../../interface/create-update-brand-request.interface';
import { BrandsService } from '../../service/brands.service';

@Component({
  selector: 'app-brands-edit',
  templateUrl: './brands-edit.component.html',
  styleUrls: ['./brands-edit.component.scss'],
})
export class BrandsEditComponent implements OnInit {
  form: FormGroup = this._formDefinition;

  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.brandsService
        .findOne(Number(id))
        .subscribe((brand) => this.form.patchValue(brand));
    }
  }

  onSubmit(): void {
    const idFormControl = this.form.get('id');
    if (idFormControl) {
      const id = idFormControl.value;
      this.brandsService
        .update(id, this.form.value as CreateUpdateBrandRequest)
        .subscribe(() => this.router.navigate(['brands']));
    }
  }

  get _formDefinition(): FormGroup {
    return this.formBuilder.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
}

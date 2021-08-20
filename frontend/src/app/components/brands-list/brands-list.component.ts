import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from '../../interface/brand.interface';
import { BrandsService } from '../../service/brands.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss'],
})
export class BrandsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'edit', 'delete'];
  // brands$: Observable<Brand[]>;
  brands: Brand[] = [];

  constructor(
    private brandsService: BrandsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // .subscribe(brands => this.brands = brands);
    this.getBrands();
  }

  onEdit(id: number): void {
    this.router.navigate(['.', id], { relativeTo: this.route });
  }

  onDelete(id: number): void {
    this.brandsService.delete(id).subscribe(() => this.getBrands());
  }

  private getBrands(): void {
    this.brandsService.findAll().subscribe((brands) => (this.brands = brands));
  }

  onAdd(): void {
    this.router.navigate(['.', 'create'], { relativeTo: this.route });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsCreateComponent } from './components/brands-create/brands-create.component';
import { BrandsEditComponent } from './components/brands-edit/brands-edit.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';

const routes: Routes = [
  {
    path: 'brands',
    component: BrandsListComponent,
  },
  {
    path: 'brands/create',
    component: BrandsCreateComponent,
  },
  {
    path: 'brands/:id',
    component: BrandsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

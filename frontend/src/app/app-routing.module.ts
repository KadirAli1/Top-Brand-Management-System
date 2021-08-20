import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsListComponent } from './components/brands-list/brands-list.component';

const routes: Routes = [
  {
    path: 'brands',
    component: BrandsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

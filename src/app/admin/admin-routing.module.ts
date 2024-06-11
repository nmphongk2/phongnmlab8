import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { AddnewComponent } from './manage-product/addnew/addnew.component';
import { EditComponent } from './manage-product/edit/edit.component';

const routes: Routes = [
  {
  path:'admin',component:DashboardComponent,
  children:[
  {path:'products',component:ManageProductComponent},
  {path:'products/add',component:AddnewComponent},
  {path:'products/:id/edit',component:EditComponent},
  // {path:'products/:id/delete',component:DeleteComponent}
  ]
  }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

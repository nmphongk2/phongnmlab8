import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AddnewComponent } from './manage-product/addnew/addnew.component';
import { EditComponent } from './manage-product/edit/edit.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductService } from '../product.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    NgxPaginationModule,
    SharedModule
  ],
  providers: [ProductService],
  declarations: [DashboardComponent, ManageProductComponent, LoginComponent, AddnewComponent, EditComponent]
})
export class AdminModule { }

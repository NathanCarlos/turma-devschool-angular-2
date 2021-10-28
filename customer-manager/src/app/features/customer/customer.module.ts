import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomerModule { }

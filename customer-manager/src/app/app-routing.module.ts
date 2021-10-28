import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './features/customer/pages/customer-page/customer-page.component';
// import { LoginComponent } from './features/login/pages/login/login.component';
import { LoginComponent } from './features/login/pages/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'customers' },
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { RegisterComponent } from './features/register/pages/register/register.component';
import { StudentsComponent } from './features/students/pages/students/students.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/students' },
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
